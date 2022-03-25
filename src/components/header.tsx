import React from "react"
import Link from "next/link"
import { FcHome, FcInfo } from "react-icons/fc"

const Header = () => {
  return (
    <nav className="flex justify-evenly py-4">
      <Link href="/">
        <a>
          <FcHome className="icons"/>
        </a>
      </Link>
      <Link href="/info">
        <a>
          <FcInfo className="icons"/>
        </a>
      </Link>
    </nav>
  )
}

export default Header
