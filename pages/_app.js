import '@/styles/globals.css'
import Layout from '@/Components/Layout'
import Navbar from '@/../Components/Navbar';
import Footer from '@/../Components/Footer';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [theme, settheme] = useState(true);
  const choosetheme = (theme) => {
    settheme(theme);
  };
  let class__to__add = `${theme ? "bg-bg_blue_phoenix text-main " : "text-light_theme_bg bg-light_theme_ot border-bg-light_theme_ot"}`;
  return (
    <Layout theme={theme}>
      <div className={"ml-[80px] mt-[64px] sm:ml-[60px] sm:text-base overflow-hidden scroll-behavior-smooth selection:bg-main selection:text-dark__blue selection:rounded-md " + class__to__add}>
        <Navbar theme={theme} choosetheme={choosetheme} />
        <Component {...pageProps} theme={theme} />
        <Footer theme={theme}/>
      </div>
    </Layout>
  )
}