import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className='container'>
        <h1>Affordable Professional Web Design</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam facilis
          ut doloremque sed expedita nobis, fuga, mollitia impedit eaque porro
          obcaecati aliquam nostrum! Repellendus dicta soluta dolores sequi
          officia omnis!
        </p>
      </div>
    </section>
  );
}
