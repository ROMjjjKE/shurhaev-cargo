const DOCS = [
  { k: 'машина', t: 'Санитарный паспорт', d: 'Документ на транспорт: подтверждает, что кузов можно использовать для продуктов. Его спрашивают при приёмке товара.' },
  { k: 'водитель', t: 'Санитарная книжка', d: 'Медицинский допуск водителя к работе с пищевыми продуктами. Без неё продукты у вас просто не примут.' },
];
const DIRS = [
  ['Город', 'Доставка по городу: магазины, кафе, склады, квартиры.', 'по звонку'],
  ['Область и РБ', 'Межгород по Беларуси: продукты, мебель, оборудование.', 'по звонку'],
  ['Минск', 'Попутные рейсы: беру груз, когда еду в Минск.', 'попутно'],
  ['Передачи', 'Документы и небольшие посылки в другой город.', 'по звонку'],
];
const STEPS = [
  { n: '01', t: 'Звонок', d: 'Скажите, что везём, откуда и куда. Сразу скажу, берусь ли и когда смогу.' },
  { n: '02', t: 'Договорились', d: 'Объём, время, нужен ли рефрижератор и режим. Цену называю до выезда, а не на выгрузке.' },
  { n: '03', t: 'Рейс', d: 'Погрузка, дорога, выгрузка. Одна машина и один водитель от начала до конца.' },
];
const FAQ = [
  ['Сколько стоит перевозка?', 'Зависит от расстояния, объёма и нужен ли рефрижератор. Называю цену по телефону до выезда, чтобы на выгрузке не было сюрпризов.'],
  ['Какой вес и объём берёте?', 'Зависит от машины и груза. Скажите, что везём и сколько примерно — сразу скажу, войдёт ли за один рейс.'],
  ['Продукты правда можно везти?', 'Да, для этого и рефрижератор: сан. паспорт на машину и сан. книжка водителя есть. Это то, что проверяют магазины и кафе при приёмке.'],
  ['Помогаете с погрузкой?', 'Скажите заранее, сколько мест и есть ли кому помочь на месте — обсудим, как поднимем и занесём.'],
  ['Почему лучше звонить, а не писать?', 'Я за рулём и на объектах, сообщение может полежать. Звонок — сразу: так вы быстрее узнаете, свободен ли я.'],
];

export function Docs() {
  return (
    <section className="section docs" id="dokumenty">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="shead__num" style={{ color: '#4d6b4a' }}>03 / документы</p>
            <h2>Два документа, из-за которых продукты доезжают</h2>
          </div>
          <p className="shead__note">Их спрашивают не перевозчика, а у вас — на приёмке. Поэтому они у меня всегда с собой.</p>
        </div>
        <div className="docs__grid">
          {DOCS.map(d => (
            <article className="doc" key={d.k}>
              <span className="doc__k">{d.k}</span>
              <h3>{d.t}</h3>
              <p>{d.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Dirs() {
  return (
    <section className="section" id="kuda">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="shead__num">04 / куда</p>
            <h2>Куда и как езжу</h2>
          </div>
          <p className="shead__note">Расписания нет: машина одна. Есть заявка — есть рейс.</p>
        </div>
        <div className="dirs">
          {DIRS.map(([t, d, m]) => (
            <div className="dir" key={t} data-reveal>
              <span className="dir__t">{t}</span>
              <span className="dir__d">{d}</span>
              <span className="dir__m">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="section" id="poryadok">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="shead__num">05 / порядок</p>
            <h2>Три шага, без переписки на полдня</h2>
          </div>
          <p className="shead__note">Всё решается звонком: что везём, когда и сколько это стоит.</p>
        </div>
        <div className="steps">
          {STEPS.map(s => (
            <div className="step" key={s.n} data-reveal>
              <span className="step__n num">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section" id="voprosy">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="shead__num">06 / вопросы</p>
            <h2>Что спрашивают перед рейсом</h2>
          </div>
          <p className="shead__note">Если вашего вопроса тут нет — звоните, отвечу сразу.</p>
        </div>
        <div className="faq">
          {FAQ.map(([q, a]) => (
            <details className="faq__item" key={q}>
              <summary>{q}</summary>
              <p className="faq__a">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
