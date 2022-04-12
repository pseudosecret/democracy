import '../styles/globals.css'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

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
