import classes from './articles.module.css';

export default function Articles() {
  return (
    <section className={classes.articles}>
      <div className='container'>
        <article className={classes.article}>
          <h1 className={classes.title}>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad
            eos, modi nemo numquam vel. Eaque voluptatibus, omnis aliquam autem
            maiores libero deserunt nobis doloremque reiciendis earum explicabo
            odit quibusdam facere neque saepe, numquam iure dolorum tempore
            velit cum? Animi!
          </p>
          <p className='dark'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            iusto sunt nostrum a magni? Necessitatibus asperiores libero
            incidunt culpa aperiam id consectetur? Quaerat magnam quo earum,
            incidunt perspiciatis quos doloremque in! Modi iure earum blanditiis
            deserunt eos labore aut temporibus, eius sed dolor quae, officiis
            voluptate at repudiandae accusamus illum.
          </p>
        </article>
        <aside className={classes.sidebar}>
          <div className='dark'>
            <h3>What We Do</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              sapiente exercitationem culpa perspiciatis, et dicta laborum
              repellat totam itaque officiis eos minima fugit fugiat soluta!
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
