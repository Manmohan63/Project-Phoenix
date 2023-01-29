import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
    return (
        <div className={styles.maincontent}>
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout