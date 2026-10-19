import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Lead from '@/components/ui/Lead';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Placeholder from '@/components/ui/Placeholder';

type Props = {
  crumbs?: { label: string; href?: string }[];
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  titleClassName?: string;
  lead?: React.ReactNode;
  image?: { src: string; alt: string } | { placeholder: string };
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode; // extra content between the lead and the image
  before?: React.ReactNode; // content above the breadcrumb, e.g. an icon
  bare?: boolean; // render only the column content, for use inside another layout
};

// Top of every inner page: breadcrumb, eyebrow, big heading, intro and an optional wide image.
export default function PageHero({ crumbs, eyebrow, title, titleClassName, lead, image, className, containerClassName, children, before, bare }: Props) {
  const content = (
    <>
      {before}
      {crumbs && <Breadcrumb items={crumbs} />}
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className={cn('split max-w-[16ch] text-title', titleClassName)}>{title}</h1>
      {lead && <Lead>{lead}</Lead>}
      {children}
      {image && <WideImage image={image} />}
    </>
  );
  if (bare) return <div className={cn('grid content-start gap-6', className)}>{content}</div>;
  return (
    <section className={cn('relative pt-[clamp(130px,16vw,200px)] pb-[clamp(50px,7vw,90px)]', className)}>
      <Container className={cn('grid gap-6', containerClassName)}>{content}</Container>
    </section>
  );
}

export function WideImage({ image }: { image: NonNullable<Props['image']> }) {
  const box = 'mt-[clamp(24px,4vw,48px)] aspect-[4/3] overflow-hidden rounded-card sm:aspect-[21/9]';
  return 'placeholder' in image
    ? <Placeholder className={box}>{image.placeholder}</Placeholder>
    : <div className={box}><img src={image.src} alt={image.alt} data-par="" className="h-[120%] w-full object-cover" /></div>;
}
