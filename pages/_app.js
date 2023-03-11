import '@/styles/globals.css'
import Layout from '@/Components/Layout'
import Navbar from '@/../Components/Navbar';
import Footer from '@/../Components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className={"ml-[80px] mt-[64px] sm:ml-[60px] sm:text-base text-main overflow-hidden scroll-behavior-smooth"}>
        <Navbar />
        <Component {...pageProps}/>
        <Footer />
      </div>
    </Layout>
  )
}