import React from 'react'
import HeaderCSS from "../styles/headerCSS.module.css"
const Header = () => {
  return (
    <header className={HeaderCSS.header}>
        <nav className={HeaderCSS.nav}>
            <ul className={HeaderCSS.list}>
                <li><a href="#">Orai Lietuvoje</a></li>
                <li><a href="#">Miestai</a></li>
                <li><a href="#">Vilnius</a></li>
                <li><a href="#">Klaipeda</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header