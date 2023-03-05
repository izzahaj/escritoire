import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Escritoire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout/>
    </>
  )
}
