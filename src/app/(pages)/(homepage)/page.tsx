import Image from 'next/image';
import styles from './home.module.scss';
import Container from '@/app/components/container/container.component';
import Highlight from '@/app/components/highlight/highlight.component';

export default function Home() {
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
      </div>

      <div className={styles['section']}>
        <Container>
          <Highlight />
          <Highlight />
          <Highlight />
        </Container>
      </div>

      <h1>heading 1</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3>
      <h4>heading 4</h4>
      <h5>heading 5</h5>
      <h6>heading 6</h6>

      <p>Normal text</p>
    </div>
  );
}
