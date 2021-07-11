import Head from 'next/head';
import Boxes from '../components/home-page/boxes';
import Hero from '../components/home-page/hero';
import Newsletter from '../components/newsletter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Acme Web Design | Welcome</title>
        <meta charSet='UTF-8' />
        <meta
          name='description'
          content='Affordable and professional web design'
        />
        <meta
          name='keywords'
          content='web design, affordable web design, professional web design'
        />
        <meta author content='Magomed Shamaev' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Newsletter />
      <Boxes />
    </div>
  );
}
