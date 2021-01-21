import Navigation from './navigation'
import Head from 'next/head'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Ahmet Erdoğan</title>
        /* meta etiketi diğer sayfalara koymadığım için her sayfaya etki eder, title ise title'ı verilmemiş
        sayfalara etki eder */
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>designed by AE</footer>
    </div>
  )
}

export default Layout
