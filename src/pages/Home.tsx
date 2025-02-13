import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import css from '../styles/homeCSS.module.css'
import City from '../components/City'
const Home = () => {
  return (
    <div>
        <Header/>
            <main className={css.container}>
                <h2>alio</h2>
                <City city={'vilnius'} forecast={'long-term'}/>
                <City city={'kaunas'} forecast={'long-term'}/>
                <City city={'klaipeda'} forecast={'long-term'}/>
            </main>
        <Footer/>
    </div>
  )
}

export default Home