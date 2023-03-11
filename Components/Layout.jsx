import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className={"bg-center bg-contain bg-no-repeat bg-fixed text-lg bg-bg_blue_phoenix w-screen"} style={{ backgroundImage: "url('https://res.cloudinary.com/dk8ign4oc/image/upload/v1678462170/bg-phoenix_qnj77t.png')" }}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout