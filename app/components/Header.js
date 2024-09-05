"use client"

import "../styles/header.css"
import Link from "next/link"
import { useEffect, useState } from "react"


export const Header = () => {
    const [isVisibleNav, setIsVisibleNav] = useState(true)
    const [prevScrollPos, setPrevScrollPos] = useState(0) //Position avant

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset || window.scrollY
            const isVisibleNav = prevScrollPos > currentScrollPos || currentScrollPos < 10
            setIsVisibleNav(isVisibleNav)
            setPrevScrollPos(currentScrollPos)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [prevScrollPos])

    return (
        <header className={isVisibleNav ? "visible" : "hidden"}>
                <span></span>
                <div />
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link href="#presentation">
                            Présentation
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#parcours">
                            Parcours
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#projets">
                            Projets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#contact">
                            Contact
                        </Link>
                    </li>
                </ul>
        </header>

    )
}