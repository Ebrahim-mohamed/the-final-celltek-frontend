import { cn } from '@/lib/cn';
import Eyebrow from './Eyebrow';
import Lead from './Lead';

type Props = {
  eyebrow: React.ReactNode;
  title?: React.ReactNode;
  titleId?: string;
  titleClassName?: string;
  as?: 'h1' | 'h2';
  lead?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

// Eyebrow + heading (+ optional lead). The heading has the "split" class so its words slide in.
export default function SectionHead({ eyebrow, title, titleId, titleClassName, as: H = 'h2', lead, className, children }: Props) {
  return (
    <div className={cn('mb-head grid gap-[22px]', className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {title && <H id={titleId} className={cn('split', titleClassName)}>{title}</H>}
      {lead && <Lead>{lead}</Lead>}
      {children}
    </div>
  );
}
