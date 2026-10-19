// Big scrolling words between sections. The motion script fills #mq with the words and moves it.
export default function Marquee() {
  return (
    <div className="marq overflow-hidden border-y border-line py-[clamp(28px,4vw,52px)] whitespace-nowrap" aria-hidden="true">
      <div className="track inline-flex will-change-transform *:px-[.3em] *:text-[clamp(54px,9vw,140px)] *:leading-none *:font-semibold *:tracking-[-.04em]" id="mq" />
    </div>
  );
}
