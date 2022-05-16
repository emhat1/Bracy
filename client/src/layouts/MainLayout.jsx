import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../App.css'



export default function MainLayout(props) {
  return (
    <main>
      {props.children}
      <Header />
      <Footer />
    </main>
  )
}
