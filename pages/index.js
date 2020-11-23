import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout.js'
import { frontmatter, react as pageContent } from '../content/home.md';

export default function Home() {
    let { title, cats } = frontmatter;

  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Home
        </h1>
        
        <h1>{title}</h1>

        {/* <pageContent /> */}

        <ul>
        {cats.map((cat, k) => (
            <li key={k}>
            <h2>{cat.name}</h2>
            <p>{cat.description}</p>
            </li>
        ))}
        </ul>
      </main>

    </Layout>
  )
}
