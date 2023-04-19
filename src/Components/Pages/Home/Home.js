import React from 'react'
import Header from '../../Layouts/Header'
import Navigate from '../../Layouts/Nav'
import Container from '../../Container'
import Footer from '../../Layouts/Footer'




function Home() {
  return (
    <div>
        <Header/>
        <Navigate/>
        <Container/>
        <Footer />
    </div>
  )
}

export default Home