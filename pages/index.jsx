import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Form from '../components/Form';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Form Validator</title>
        <link rel="icon" href="/" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Form Validator</h1>

        <Form />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/bryansmullen" target="_blank" rel="noopener noreferrer">
          <img src="/logo.svg" alt="Vercel Logo" className={styles.logo} />
          &nbsp;
          <small>
            by Bryan Mullen
            {new Date().getFullYear()}
          </small>
        </a>
      </footer>
    </div>
  );
}
