import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children, theme }) => {
    let class__to__add = theme ? "bg-bg_blue_phoenix text-main" :"bg-[white] text-main";
    return (
        <div className={"bg-center bg-contain bg-no-repeat bg-fixed text-xl w-screen " + `${theme ? "bg-bg_blue_phoenix text-main " : "text-light_theme_bg bg-light_theme_ot border-bg-light_theme_ot"}`} style={{ backgroundImage: "url('https://res.cloudinary.com/dk8ign4oc/image/upload/v1678462170/bg-phoenix_qnj77t.png')" }}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout