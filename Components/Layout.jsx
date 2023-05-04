/**
 * This is a React component that renders a layout with a sidebar and children components, with the
 * ability to switch between different themes.
 * @returns The `Layout` component is being returned, which renders a `Sidebar` component and any
 * children components passed to it as props. The `className` of the `div` element is conditionally set
 * based on the `theme` prop passed to it.
 */
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