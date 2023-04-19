import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children, theme }) => {

    return (
        <div className={"text-xl w-screen text-main " + `${theme ? "bg-bg_blue_phoenix " : " bg-light_theme_ot  border-bg-light_theme_ot"}`}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout