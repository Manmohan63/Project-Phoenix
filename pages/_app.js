/**
 * This is the main App component that sets the theme and renders the Layout, Navbar, Component, and
 * Footer components.
 * @returns The code is returning a React component that renders a layout with a navbar, a footer, and
 * a main content component. The layout has a background image and a dynamic class that changes based
 * on the theme state. The theme state is managed using the useState hook. The choosetheme function is
 * used to update the theme state. The Component and pageProps are passed as props to the main content
 * component
 */
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
  let class__to__add = `${theme ? "bg-bg_blue_phoenix  " : " bg-light_theme_ot border-bg-light_theme_ot "}`;
  return (
    <Layout theme={theme}>
      <div className={"ml-[80px] mt-[64px] sm:ml-[60px] sm:text-base overflow-hidden scroll-behavior-smooth selection:bg-main selection:text-dark__blue selection:rounded-md bg-center bg-contain bg-no-repeat bg-fixed text-main " + class__to__add} style={{ backgroundImage: "url('https://res.cloudinary.com/dk8ign4oc/image/upload/v1678462170/bg-phoenix_qnj77t.png')" }}>
        <Navbar theme={theme} choosetheme={choosetheme} />
        <Component {...pageProps} theme={theme}/>
        <Footer theme={theme}/>
      </div>
    </Layout>
  )
}