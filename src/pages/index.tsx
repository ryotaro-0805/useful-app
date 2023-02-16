import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Footer from './components/Footer'
import qr from '../../public/img/qr.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h2>Useful App</h2>
            <Link href='/components/pipeData'><button className={styles.index_button} >鋼管データ一覧表</button></Link>
            <Link href='/components/thicknessCalculation'><button className={styles.index_button} >水圧用塞ぎ板</button></Link>
        </div>
        <Image className={styles.qrcode} src={qr} alt='qr-code' />
      </main>
      <Footer />
    </>
  )
}
