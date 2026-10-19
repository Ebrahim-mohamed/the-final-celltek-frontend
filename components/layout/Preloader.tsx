// Home page intro: logo wipe and 000 to 100 counter, played by the motion script.
export default function Preloader() {
  return (
    <div className="pre fixed inset-0 z-100 grid place-items-center bg-ink" id="pre" aria-hidden="true">
      <div className="grid justify-items-center gap-[18px]">
        <img className="logo w-[min(320px,60vw)]" src="/img/celltek-logo.png" alt="" width="480" height="77" />
        <div className="bar h-px w-[min(320px,60vw)] overflow-hidden bg-line"><i className="block h-full bg-accent-hi" /></div>
        <div className="font-mono text-[13px] tracking-[.2em] text-muted"><span id="pc">000</span> / 100</div>
      </div>
    </div>
  );
}
