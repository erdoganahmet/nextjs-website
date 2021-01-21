import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
      <Head>
          <title>Anasayfa</title>
      </Head>
      <h1>Merhaba!</h1>
      <p>lorem ipsum dolor</p>

      <style jsx>{`
        p {
          color: orange;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
