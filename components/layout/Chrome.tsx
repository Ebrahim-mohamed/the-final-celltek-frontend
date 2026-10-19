import { contact } from '@/lib/content';

// Site-wide extras: the custom cursor (desktop only) and the floating WhatsApp button.
export default function Chrome() {
  return (
    <>
      <div className="cur pointer-events-none fixed top-0 left-0 z-90 h-1.5 w-1.5 rounded-full bg-fg mix-blend-difference" aria-hidden="true" />
      <div className="cur-ring pointer-events-none fixed top-0 left-0 z-90 grid h-[38px] w-[38px] place-items-center rounded-full border border-fg/50 [&.big]:h-24 [&.big]:w-24 [&.big]:border-fg [&.big]:bg-fg" aria-hidden="true">
        <span className="font-mono text-xs font-medium uppercase tracking-[.1em] text-ink opacity-0 in-[.big]:opacity-100">View</span>
      </div>
      <a className="fixed right-5 bottom-[calc(20px+env(safe-area-inset-bottom,0px))] z-40 grid h-[58px] w-[58px] place-items-center rounded-full bg-whatsapp shadow-[0_12px_30px_-8px_rgba(0,0,0,.6)] transition-transform duration-300 ease-brand hover:scale-108" href={contact.whatsapp} target="_blank" rel="noopener" aria-label="WhatsApp us">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3z" /></svg>
      </a>
    </>
  );
}
