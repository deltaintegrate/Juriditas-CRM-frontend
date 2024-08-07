import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'

function DefaultLayout({children}) {
    return (
        <div className="default-layout" >
            <div className="header mb-3" >
            <Header />
            </div>
            <main className="main" >
                {children}
            </main>
            <footer className="footer" >
                <Footer />
            </footer>
        </div>       

    )
}

export default DefaultLayout
