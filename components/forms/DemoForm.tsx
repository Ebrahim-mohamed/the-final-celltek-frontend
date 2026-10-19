"use client";
import { useState, type FormEvent, type FocusEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { services, contact } from '@/lib/content';
import { buttonClass } from '@/components/ui/Button';
import Field, { inputClass } from './Field';

const interests = [{ value: 'solution', label: 'Real Estate Interactive Solution' },
  ...services.map((s) => ({ value: s.slug, label: s.name })), { value: 'other', label: 'Something else' }];

const errors: Record<string, string> = {
  name: 'Enter your name so we know who to ask for.',
  company: 'Enter your company name.',
  phone: 'Enter a number we can call or message.',
  email: 'Check the email format, for example name@company.com.',
};

// Book a demo form: checks a field when the visitor leaves it, clears the error as soon as it is fixed,
// then posts to /api/lead and moves to the thank-you page.
export default function DemoForm() {
  const preset = useSearchParams().get('interest');
  const [bad, setBad] = useState<Record<string, boolean>>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  const check = (el: HTMLInputElement) => {
    const isBad = !el.checkValidity();
    setBad((b) => ({ ...b, [el.name]: isBad }));
    return !isBad;
  };
  const onBlur = (e: FocusEvent<HTMLInputElement>) => { if (e.target.value || e.target.required) check(e.target); };
  const onInput = (e: FormEvent<HTMLInputElement>) => { if (bad[e.currentTarget.name]) check(e.currentTarget); };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const inputs = Array.from(form.querySelectorAll('input'));
    const invalid = inputs.filter((i) => !check(i));
    if (invalid.length) { invalid[0].focus(); return; }
    setSending(true); setFailed(false);
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!res.ok) throw new Error(String(res.status));
      window.location.assign('/thank-you');
    } catch {
      setFailed(true); setSending(false);
    }
  }

  const input = (name: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement>, optional = false) => (
    <Field id={`f-${name}`} label={label} optional={optional} error={errors[name]} bad={bad[name]}>
      <input id={`f-${name}`} name={name} {...props} className={inputClass} aria-invalid={bad[name] || undefined} onBlur={onBlur} onInput={onInput} />
    </Field>
  );

  const validPreset = interests.some((i) => i.value === preset) ? preset! : 'solution';
  const row = 'grid grid-cols-1 gap-3.5 sm:grid-cols-2';
  return (
    <form className="on-paper grid gap-[18px] rounded-3xl bg-paper p-[clamp(24px,3vw,44px)] text-on-paper" onSubmit={onSubmit} noValidate>
      <div className={row}>
        {input('name', 'Full name', { autoComplete: 'name', required: true })}
        {input('company', 'Company', { autoComplete: 'organization', required: true })}
      </div>
      <div className={row}>
        {input('phone', 'Phone or WhatsApp', { type: 'tel', autoComplete: 'tel', placeholder: '+20 1xx xxx xxxx', required: true })}
        {input('email', 'Work email', { type: 'email', autoComplete: 'email' }, true)}
      </div>
      <Field id="f-int" label="I'm interested in">
        <select id="f-int" name="interest" defaultValue={validPreset} key={validPreset} className={inputClass}>
          {interests.map((i) => <option key={i.value} value={i.value}>{i.label}</option>)}
        </select>
      </Field>
      {input('project', 'Project name and location', { placeholder: 'For example, a compound in New Cairo' }, true)}
      <Field id="f-msg" label="Anything else?" optional>
        <textarea id="f-msg" name="message" className={`${inputClass} min-h-[110px] resize-y`} />
      </Field>
      <button className={buttonClass('primary', 'md', 'justify-self-start')} type="submit" disabled={sending}>{sending ? 'Sending…' : 'Book my demo'}</button>
      {failed && <p className="m-0 text-[13px] text-error" role="alert">We couldn&apos;t send your request just now. Please try again, or message us on WhatsApp at {contact.phone}.</p>}
      <p className="m-0 text-[13px] text-on-paper-muted">We only use your details to arrange the demo.</p>
    </form>
  );
}
