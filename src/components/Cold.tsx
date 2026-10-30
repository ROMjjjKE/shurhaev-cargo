import { useEffect, useRef, useState } from 'react';
const BANDS = [
  { k: 'Охлаждёнка', v: '+2…+6 °C' },
  { k: 'Заморозка', v: '−18 °C' },
  { k: 'Сухой груз', v: 'без режима' },
];
export default function Cold() {
  const [pin, setPin] = useState(false);
  const sec = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const mover = useRef<HTMLSpanElement>(null);
  const fills = useRef<Array<HTMLSpanElement | null>>([]);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sec.current) return;
    const desktop = window.matchMedia('(min-width: 981px)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!desktop.matches || calm.matches) return;
    let st: { kill: () => void } | null = null;
    let io: IntersectionObserver | null = null;
    const setup = async () => {
      const gsap = (await import('gsap')).default;
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      setPin(true);
      await new Promise(r => requestAnimationFrame(r));
      st = ScrollTrigger.create({
        trigger: stage.current, start: 'top top', end: '+=160%', pin: true, scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          if (mover.current) mover.current.style.transform = `translate3d(${p * 100}%,0,0)`;
          fills.current.forEach((el, i) => {
            if (!el) return;
            const local = Math.min(1, Math.max(0, (p - i * 0.14) / 0.5));
            el.style.transform = `scaleX(${local})`;
          });
          if (count.current) count.current.textContent = `${String(Math.min(BANDS.length, Math.floor(p * BANDS.length) + 1)).padStart(2, '0')} / 03`;
        },
      });
    };
    io = new IntersectionObserver(e => { if (e[0].isIntersecting) { io?.disconnect(); io = null; void setup(); } }, { rootMargin: '320px 0px' });
    io.observe(sec.current);
    return () => { io?.disconnect(); st?.kill(); window.dispatchEvent(new Event('resize')); };
  }, []);

  return (
    <section className={`section cold${pin ? ' cold--pin' : ''}`} id="holod" ref={sec}>
      <div className="cold__stage" ref={stage}>
        <div className="wrap cold__inner">
          <div className="shead">
            <div>
              <p className="shead__num">02 / холод</p>
              <h2>Холодная цепь, а не «вроде прохладно»</h2>
            </div>
            <p className="shead__note">Продукты портятся не в дороге, а на стыках: пока грузили, пока искали адрес, пока стояли на выгрузке. Рефрижератор держит режим весь путь.</p>
          </div>
          <div className="cold__grid">
            <div className="cold__bands">
              {BANDS.map((b, i) => (
                <div className={`band band--${i + 1}`} key={b.k}>
                  <span className="band__fill" ref={el => { fills.current[i] = el; }} aria-hidden="true" />
                  <span className="band__k">{b.k}</span>
                  <span className="band__v num">{b.v}</span>
                </div>
              ))}
              <span className="mover" ref={mover} aria-hidden="true" />
            </div>
            <div>
              <p className="cold__caption">
                Охлаждёнка едет при плюсовой температуре, заморозка — при минус восемнадцати. Такой груз
                принимают только с сан. паспортом на машину и сан. книжкой водителя: без них магазин или кафе
                товар не возьмут.
              </p>
              <p className="cold__count">режим <span ref={count} className="num">01 / 03</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
