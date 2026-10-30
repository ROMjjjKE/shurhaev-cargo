import { useEffect, useRef } from 'react';
export const PHONES: Array<[string, string]> = [
  ['+375 29 283-42-33', 'tel:+375292834233'],
  ['+375 29 666-83-36', 'tel:+375296668336'],
];
export default function Header() {
  const bar = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? window.scrollY / h : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(1, p)})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header className="hdr">
      <div className="hdr__bar">
        <a className="hdr__name" href="#top">Шурхаев · грузоперевозки</a>
        <nav className="hdr__nav" aria-label="Разделы">
          <a href="#vezem">Что везём</a>
          <a href="#holod">Рефрижератор</a>
          <a href="#kuda">Куда</a>
          <a href="#voprosy">Вопросы</a>
        </nav>
        <a className="hdr__tel" href={PHONES[0][1]}>{PHONES[0][0]}</a>
      </div>
      <span className="prog" ref={bar} aria-hidden="true" />
    </header>
  );
}
