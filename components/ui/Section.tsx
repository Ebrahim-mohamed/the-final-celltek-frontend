import { cn } from '@/lib/cn';
import Container from './Container';

type Props = React.HTMLAttributes<HTMLElement> & {
  tone?: 'dark' | 'paper';
  flushTop?: boolean;
  bare?: boolean; // skip the inner Container
  containerClassName?: string;
};

// A page section with the standard vertical rhythm. tone="paper" switches to the light background.
export default function Section({ tone = 'dark', flushTop, bare, className, containerClassName, children, ...rest }: Props) {
  return (
    <section className={cn('relative py-section', tone === 'paper' && 'on-paper bg-paper text-on-paper', flushTop && 'pt-0', className)} {...rest}>
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}
