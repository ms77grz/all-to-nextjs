import classes from './services.module.css';

export default function Services() {
  return (
    <section>
      <div className='container'>
        <article className={classes.article}>
          <h1 className={classes.title}>Services</h1>
          <ul className={classes.services}>
            <li>
              <h3>Website Design</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda quos perferendis voluptates iure, iusto eligendi quo
                harum sint maiores animi!
              </p>
              <p>Pricing: $1,000 - $3,000</p>
            </li>
            <li>
              <h3>Website Maintenance</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda quos perferendis voluptates iure, iusto eligendi quo
                harum sint maiores animi!
              </p>
              <p>Pricing: $250 per month</p>
            </li>
            <li>
              <h3>Website Hosting</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Assumenda quos perferendis voluptates iure, iusto eligendi quo
                harum sint maiores animi!
              </p>
              <p>Pricing: $25 per month</p>
            </li>
          </ul>
        </article>
        <aside className={classes.sidebar}>
          <div className='dark'>
            <h3>Get A Quote</h3>
            <form className={classes.quote}>
              <div>
                <label htmlFor='name'>Name</label>
                <br />
                <input type='text' name='' id='name' placeholder='Name' />
              </div>
              <div>
                <label htmlFor='email'>Email</label>
                <br />
                <input
                  type='email'
                  name=''
                  id='email'
                  placeholder='Email Address'
                />
              </div>
              <div>
                <label htmlFor='message'>Message</label>
                <br />
                <textarea placeholder='Message' id='message'></textarea>
              </div>
              <button className='btn' type='submit'>
                Send
              </button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
}
