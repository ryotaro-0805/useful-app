import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react';


export default function WeightCalculation() {
  const router=useRouter();
  const ref=useRef();
  const [result,setResult]=useState(0);
  const calcFnc=(e)=>{
    e.preventDefault();
    setResult(
      ((router.query.size**2-(router.query.size-router.query.thickness*2)**2)/4*3.141592*ref.current.value*7.85*0.000001).toFixed(1)   
      )
  }
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.calc_div}>
            <h2>重量計算アプリ</h2>
            <form onSubmit={calcFnc} action="">
            <p>{`外径φ${router.query.size}　厚さt${router.query.thickness}の重量計算を行います。`}</p>
            <p>長さを入力してください。</p>
            <input ref={ref} type="number" /> mm
            <input onClick={calcFnc} type="button" value="決定" />
            </form>
            {result===0?null:<p>計算結果は{result}kgです。</p>}
        </div>
            <Link href='/'><button className={styles.button}>Topへ戻る</button></Link>
      </main>
    </>
  )
}
