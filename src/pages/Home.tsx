import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import css from '../styles/homeCSS.module.css'
const Home = () => {
  return (
    <div>
        <Header/>
            <main className={css.container}>
                <h2>alio</h2>
            </main>
        <Footer/>
    </div>
  )
}

export default Home