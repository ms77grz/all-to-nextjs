import Link from 'next/link';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className='container'>
        <h1 className={classes.logo}>
          <Link href='/'>
            <span>
              <span className={classes.highlight}>Acme</span> Web Design
            </span>
          </Link>
        </h1>

        <nav>
          <ul>
            <li className={classes.current}>
              <a>
                <Link href='/'>Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href='/about'>About</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href='/services'>Services</Link>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
