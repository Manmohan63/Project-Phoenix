import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children, theme }) => {
    let class__to__add = theme ? "bg-bg_blue_phoenix text-main" :"bg-[white] text-main";
    return (
        <div className={"text-xl w-screen " + `${theme ? "bg-bg_blue_phoenix text-main " : "text-light_theme_bg bg-light_theme_ot border-bg-light_theme_ot"}`}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout