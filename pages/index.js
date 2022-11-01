import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Lochlan's Sports Dashboard!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Today's Scores" />
        <p className="description">
          Last updated: 
        </p>
    
    <iframe src="/Users/lochlanhendrix/Desktop/Scores.txt" width="500" height="300" frameBorder="0">

    
      </main>

      <Footer />
    </div>
  )
}
