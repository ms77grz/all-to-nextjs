import classes from './newsletter.module.css';

export default function Newsletter() {
  return (
    <section className={classes.newsletter}>
      <div className='container'>
        <h2>Subscribe to our newsletter</h2>
        <form>
          <input type='email' name='' id='' placeholder='Enter Email...' />
          <button type='submit' className='btn'>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
