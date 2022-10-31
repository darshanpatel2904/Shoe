import '../styles/globals.scss'
import Layout from '../components/basicLayout'

export default function MyApp({ Component, pageProps }) {
  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

