import { cn } from '@/lib/cn';
import Eyebrow from '@/components/ui/Eyebrow';
import ArrowLink from '@/components/ui/ArrowLink';
import Placeholder from '@/components/ui/Placeholder';

type Props = {
  href?: string;
  img?: string;
  alt?: string;
  eyebrow?: string;
  logo?: { src: string; alt: string };
  title: string;
  children?: React.ReactNode;
  loc?: string;
};

// Project card: image that unmasks on scroll, then title, details and a link. Without href it is a plain card.
export default function CaseCard({ href, img, alt = '', eyebrow, logo, title, children, loc }: Props) {
  const body = (
    <>
      <div className="img zoom-img relative aspect-[4/3] overflow-hidden [clip-path:inset(0_0_0_0)]">
        {img ? <img data-par src={`/img/${img}.jpg`} alt={alt} loading="lazy" className="h-[120%] w-full object-cover" />
          : <Placeholder className="absolute inset-0">Project image to come</Placeholder>}
      </div>
      <div className="grid gap-4 px-7 pt-7 pb-[30px]">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {logo && <img className="h-7 w-auto justify-self-start opacity-80" src={`/img/${logo.src}.png`} alt={logo.alt} />}
        <h3 className="text-h3-lg">{title}</h3>
        {children}
        {href && <ArrowLink as="span">View case study</ArrowLink>}
      </div>
    </>
  );
  const cls = cn('case group grid overflow-hidden rounded-card border border-line bg-ink-2 text-inherit');
  return href
    ? <a className={cls} href={href} data-cursor="Open" data-loc={loc}>{body}</a>
    : <div className={cls} data-loc={loc}>{body}</div>;
}
