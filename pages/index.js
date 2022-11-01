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
    
    <object data="/path_to_text_file/text.txt" type="text/plain"
width="500" style="height: 300px">
<a href="/Users/lochlanhendrix/Desktop/Scores.txt">No Support?</a>
</object>
    
      </main>

      <Footer />
    </div>
  )
}
