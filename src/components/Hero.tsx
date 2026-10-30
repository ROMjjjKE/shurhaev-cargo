import { PHONES } from './Header';
const FACTS: Array<[string, string]> = [
  ['01', 'Рефрижератор для продуктов: держим режим от загрузки до выгрузки'],
  ['02', 'Сан. паспорт на машину и сан. книжка — магазин примет товар'],
  ['03', 'Попутные рейсы в Минск и доставка по городу и РБ'],
];
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero__grid">
          <div>
            <p className="micro micro--muted hero__plate">ИП Шурхаев В. А. · грузоперевозки · Беларусь</p>
            <h1>Продукты, мебель и передачи — одним рейсом</h1>
            <p className="lead" style={{ marginTop: 'clamp(18px,2.4vw,28px)' }}>
              Рефрижератор для продуктов питания, вывоз мебели, передачи и доставка грузов.
              Город, область и попутные рейсы в Минск.
            </p>
            <div className="hero__actions">
              <a className="btn" href={PHONES[0][1]}>Позвонить {PHONES[0][0]}</a>
              <a className="btn btn--ghost" href="#vezem">Что везём</a>
            </div>
            <p className="hero__note">На сообщения могу не ответить: я за рулём. Лучше звоните — так быстрее всего.</p>
          </div>
          <ul className="facts" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {FACTS.map(([n, t]) => (
              <li key={n}>
                <span className="facts__n num">{n}</span>
                <p className="facts__t">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
