import { cn } from '@/lib/cn';

const variants = {
  primary: 'bg-accent text-white before:bg-white hover:text-accent',
  ghost: 'border-fg/40 text-fg before:bg-fg hover:text-ink on-accent:border-white/60',
  white: 'bg-white text-accent before:bg-ink hover:text-white',
};
const sizes = {
  md: 'px-7 py-4 text-base',
  sm: 'px-5 py-3 text-[15px] max-md:px-3.5 max-md:py-2.5 max-md:text-sm',
};

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  magnet?: boolean; // the button leans toward the cursor
};

// Pill button with a colour fill that slides up on hover.
export const buttonClass = (variant: keyof typeof variants = 'primary', size: keyof typeof sizes = 'md', className?: string) =>
  cn(
    'relative isolate inline-flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-full border border-transparent font-display font-medium leading-none',
    'transition-[color,border-color] duration-400 ease-brand',
    'before:absolute before:inset-0 before:-z-1 before:translate-y-[101%] before:rounded-[inherit] before:transition-transform before:duration-500 before:ease-brand before:content-[""] hover:before:translate-y-0',
    'disabled:cursor-wait disabled:opacity-70',
    variants[variant],
    sizes[size],
    className,
  );

export default function Button({ variant = 'primary', size = 'md', magnet, className, children, ...rest }: Props) {
  const a = <a className={buttonClass(variant, size, className)} {...rest}>{children}</a>;
  return magnet ? <span className="magnet inline-block">{a}</span> : a;
}
