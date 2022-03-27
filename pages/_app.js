import '../styles/globals.css'
import TheHeader from '../components/the-header'
import TheFooter from '../components/the-footer'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TheHeader />
      <Component {...pageProps} />
      <TheFooter />
    </div>
  )
}

export default MyApp
