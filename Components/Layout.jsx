import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className={"bg-fixed bg-center bg-cover text-lg"} style={{ backgroundImage: "url('https://res.cloudinary.com/dk8ign4oc/image/upload/v1678252442/1_ynixuz.png')" }}>
            <Sidebar />
            {children}
        </div>
    )
}

export default Layout