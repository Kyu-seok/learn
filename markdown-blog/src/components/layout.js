import React from "react"
import Header from "./header"
import Footer from "./footer"

import "./components.css"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout