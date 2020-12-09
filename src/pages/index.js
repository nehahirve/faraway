import React from 'react'
import Menu from '../components/menu_closed.js'
import Logo from '../components/logo.js'

const colors = { pink: '#f38cdf', green: '#98c690' }

export default function Home() {
  return (
    <>
      <nav>
        <Menu colour={colors.green} />
      </nav>
      <section id="splash">
        <a href="#offers" className="logo_splash">
          <Logo colour={colors.green} />
        </a>
      </section>
      <section id="offers"></section>
      <section className="bookings"></section>
      <section className="login"></section>
      <section className="about"></section>
      <section className="contact">
        <a href="#splash" className="logo_contact">
          <Logo colour={colors.pink} />
        </a>
        <a href="">info@faraway.com</a>
        <p>070 123 1234</p>
      </section>
    </>
  )
}
