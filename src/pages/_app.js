import '../styles/globals.scss'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'
import FixedIcon from '../components/FixedIcon'

function MyApp({ Component, pageProps }) {
  const router = useRouter()    
  //console.log('main master index called',router,Component)
  return (
  <>
  <Head>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous"/>
  </Head>
  <Header/>
  <FixedIcon/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}

export default MyApp
