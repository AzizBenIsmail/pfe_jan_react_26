import React from 'react'
import Navbar from './navbar/Navbar'
import Head from './head/Head'
import Footer from './footer/Footer'
import Welcome from './Welcome'
import App from '../App'
export default function All() {
  return (
    <div>
      <Navbar />
      <Head />
        <Welcome name="Aziz" />
        <App />
        <Footer />
    </div>
  )
}
