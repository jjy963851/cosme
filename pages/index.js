
import Head from 'next/head'
import Layout from '@/components/layout';
import 'swiper/css';
import Mainpage, { MainPage1, MainPage3 } from './mainpage';
import GPT from './chatgpt';

export default function Home({projects}) {
 
 
  
  return (
    <>
      <Head>
        <title>Cosme</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      
      <div className="container mx-auto py-5 px-4">
      <div className="flex flex-wrap -mx-2">
      
      <GPT/>
     
      </div>
      </div>
     
       
      </Layout>
    </>
  )
}


