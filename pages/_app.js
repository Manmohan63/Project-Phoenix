import '@/styles/globals.css'
import Layout from '@/Components/Layout'
import Navbar from '@/../Components/Navbar';
import Footer from '@/../Components/Footer';
import styles from '../styles/App.module.scss'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className={styles["Layout"]}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  )
}