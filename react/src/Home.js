import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <div class="search-header-container">
                    <h2 id="search-header">Welcome!</h2>
                    <section class="instructions">
                        <h6 class="instructions-text">Please use one of the options below to log in.</h6>
                    </section>
                </div>
            <div class="tab-content"></div>
            <div class="search-footer-container">
            <section class="search-footer">

            </section>
          </div>
          <Footer />
        </>
    )
}