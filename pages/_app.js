import '@/styles/globals.css'
import Layout from '@/Components/Layout'
import Navbar from '@/../Components/Navbar';
import Footer from '@/../Components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <div className={"pl-[8vw] pt-[calc(4vw+0.5px)] text-main scroll-behavior-smooth scroll-snap-type-y-mandatory"}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Layout>
  )
}