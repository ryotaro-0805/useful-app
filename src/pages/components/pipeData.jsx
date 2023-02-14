import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import {pipeDatabase} from '../../../public/pipeDatabase'
import { useRouter } from 'next/router'
import Footer from './Footer'

export default function PipeData() {
    const pipeData = pipeDatabase
    const router=useRouter();
    const calcFnc=(data,index)=>{
        // <Link  href='/components/weightCalculation'></Link>
        router.push({
            pathname:'/components/weightCalculation',
            query:{size:pipeDatabase[index].outsideDia,
            thickness:data.target.textContent}});
        // console.log(data.target.textContent);
        // console.log(pipeDatabase[index].outsideDia);
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
                <div className={styles.description}>
                    <h2>鋼管データ一覧表</h2>
                    <table className={styles.pipeData_table}>
                        <thead>
                            <tr>
                                <th className={styles.test}>呼び径(A)</th>
                                <th>呼び径(B)</th>
                                <th>外径(φ)</th>
                                <th>厚み(SGP)</th>
                                <th>厚み(Sch40)</th>
                                <th>厚み(Sch80)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pipeData.map((pipe, index) => (
                                <tr key={index}>
                                    <td>{`${pipe.a}A`}</td>
                                    <td>{`${pipe.b}B`}</td>
                                    <td>{`${pipe.outsideDia}`}</td>
                                    <td onClick={(target)=>calcFnc(target,index)} >{`${pipe.thickness_sgp}`}</td>
                                    <td onClick={(target)=>calcFnc(target,index)}>{`${pipe.thickness_40}`}</td>
                                    <td onClick={(target)=>calcFnc(target,index)}>{`${pipe.thickness_80}`}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link href='/'><button className={styles.button}>Topへ戻る</button></Link>
                </div>
            </main>
            <Footer />
        </>
    )
}
