import Image from 'next/image';
import styles from './home.module.scss';
import Container from '@/components/container/container.component';
import Highlight from '@/components/highlight/highlight.component';

export default function Home() {
  const highlight = [
    {
      title: 'promo 1',
      url: '/promo-1',
      imageUrl: '/mock/img/product-img.jpg',
      description: "Shop online and we'll deliver to you",
    },
    {
      title: 'promo 2',
      url: '/promo-2',
      imageUrl: '/mock/img/product-img.jpg',
      description: 'Current specials',
    },
    {
      title: 'promo 3',
      url: '/promo-3',
      imageUrl: '/mock/img/product-img.jpg',
      description: 'Shop essentials',
    },
    {
      title: 'promo 4',
      url: '/promo-4',
      imageUrl: '/mock/img/product-img.jpg',
      description: 'Rewards for all your shopping',
    },
  ];

  return (
    <div className={styles['homepage']}>
      <div className={styles['hero']}>
        <Image
          alt="hero"
          src="/mock/img/hero.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <h1>Welcome</h1>

      <div className={styles['section']}>
        <Container center="true">
          {highlight.map((hl, i) => (
            <Highlight key={i} {...hl} />
          ))}
        </Container>
      </div>

      {/* <div className={styles['section']}>
        <Container>
          <Highlight />
          <Highlight />
          <Highlight />
        </Container>
      </div>

      <div className={styles['section']}>
        <Container>
          <Highlight />
          <Highlight />
          <Highlight />
        </Container>
      </div> */}

      {/* <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>

      <p>Normal text</p> */}
    </div>
  );
}
