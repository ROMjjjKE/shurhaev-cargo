import { PHONES } from './Header';
export function Ask() {
  return (
    <section className="section ask" id="svyaz">
      <div className="wrap">
        <div className="ask__grid">
          <div>
            <p className="micro micro--muted">07 / связь</p>
            <h2 style={{ marginTop: 10 }}>Позвоните — и сразу будет ясно</h2>
            <p className="ask__hint" style={{ marginTop: 14 }}>
              Скажите груз, адреса и время. Отвечу, свободен ли, и назову цену до выезда.
            </p>
          </div>
          <div>
            {PHONES.map(([p, href], i) => (
              <a className={`tel${i ? ' tel--s' : ''}`} href={href} key={href}>{p}</a>
            ))}
            <p className="ask__hint">ИП Шурхаев В. А. · грузоперевозки · Беларусь</p>
            <a className="btn btn--ghost" href={PHONES[0][1]} style={{ marginTop: 18 }}>Позвонить сейчас</a>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__grid">
          <div>
            <h3>Шурхаев · грузоперевозки</h3>
            <p>Рефрижератор, мебель, передачи. Город, область и попутные рейсы в Минск.</p>
          </div>
          <div>
            <h3>Телефоны</h3>
            {PHONES.map(([p, href]) => <a href={href} key={href} style={{ display: 'block' }}>{p}</a>)}
          </div>
          <div>
            <h3>Разделы</h3>
            <a href="#vezem" style={{ display: 'block' }}>Что везём</a>
            <a href="#holod" style={{ display: 'block' }}>Рефрижератор</a>
            <a href="#kuda" style={{ display: 'block' }}>Куда езжу</a>
            <a href="#voprosy" style={{ display: 'block' }}>Вопросы</a>
          </div>
        </div>
        <div className="ftr__bottom">
          <span>ИП Шурхаев В. А.</span>
          <span>Сан. паспорт на транспорт · сан. книжка водителя</span>
        </div>
      </div>
    </footer>
  );
}
