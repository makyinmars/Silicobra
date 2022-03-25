import React from "react"

import Footer from "./footer"
import Header from "./header"

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
