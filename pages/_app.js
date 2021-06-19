import 'bulma/css/bulma.min.css'
import '../styles/globals.css'
import Layout from 'component/Layout'

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
