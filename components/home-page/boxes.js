import Image from 'next/image';
import classes from './boxes.module.css';

export default function Boxes() {
  return (
    <section className={classes.boxes}>
      <div className='container'>
        <div className={classes.box}>
          <Image
            src='/images/logo_html.png'
            alt='HTML logo'
            width={300}
            height={300}
          />
          <h3>HTML5 Markup</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
            provident aliquam mollitia, quam voluptates quibusdam doloribus
            deserunt eos fugiat nostrum eaque consequuntur nihil necessitatibus
            animi officia, aliquid aspernatur hic ad.
          </p>
        </div>
        <div className={classes.box}>
          <Image
            src='/images/logo_css.png'
            alt='HTML logo'
            width={300}
            height={300}
          />
          <h3>CSS3 Styling</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            nemo aperiam laborum libero similique qui tenetur totam, quia earum
            eos quidem distinctio autem blanditiis aliquam? Unde fugit
            reiciendis nostrum odio.
          </p>
        </div>
        <div className={classes.box}>
          <Image
            src='/images/logo_brush.png'
            alt='HTML logo'
            width={300}
            height={300}
          />
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            delectus excepturi labore sit, eligendi perferendis at reiciendis
            iusto molestiae perspiciatis. Quia recusandae odio libero eligendi
            distinctio molestias illum error excepturi.
          </p>
        </div>
      </div>
    </section>
  );
}
