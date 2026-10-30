const ITEMS = [
  { n: '01', t: 'Продукты питания', d: 'Охлаждённые и замороженные продукты в рефрижераторе. Режим держится всю дорогу, а не «примерно».', tags: ['+2…+6 °C', '−18 °C', 'сан. паспорт'] },
  { n: '02', t: 'Мебель и вывоз', d: 'Перевезём и вывезем: квартира, офис, склад. Скажите объём — скажу, войдёт ли в один рейс.', tags: ['вывоз', 'один рейс'] },
  { n: '03', t: 'Передачи и доставка', d: 'Документы, посылки, запчасти, оборудование: по городу, по области и в другие города.', tags: ['город', 'РБ'] },
  { n: '04', t: 'Попутные рейсы в Минск', d: 'Когда еду в Минск — беру груз по пути. Вам дешевле, чем гнать отдельную машину.', tags: ['Минск', 'попутно'] },
];
export default function Cargo() {
  return (
    <section className="section" id="vezem">
      <div className="wrap">
        <div className="shead">
          <div>
            <p className="shead__num">01 / что везём</p>
            <h2>Четыре вещи, которые везу чаще всего</h2>
          </div>
          <p className="shead__note">Одна машина, один водитель, без диспетчеров и перегрузок на складе. Скажите, что и куда — скажу, когда смогу.</p>
        </div>
        <div className="cargo">
          {ITEMS.map(i => (
            <article className="card" key={i.n} data-reveal>
              <span className="card__n num">{i.n}</span>
              <h3>{i.t}</h3>
              <p>{i.d}</p>
              <div className="tags">{i.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
