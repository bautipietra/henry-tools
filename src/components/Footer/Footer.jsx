import React from 'react'
import logoHenry from '../../assets/ISOLOGO_HENRY_BLACK.png'
import { NavLink } from 'react-router-dom'
import s from './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className={s.logo}>
        <NavLink to={'/'} className={s.imgLink}>
          <img src={logoHenry} alt="Henry" />
        </NavLink>
        <NavLink to={'/'} className={s.txtLink}>Tools</NavLink>
      </div>
      <div className={s.credits}>
        <p>
          Website made with 💛 by <a href="https://www.linkedin.com/in/bautista-pietraroia-b79271214/" target={'_blank'}>Bautista Pietraroia</a>
        </p>
        <br />
        <p>
          Página <strong>NO</strong> oficial de Soy Henry
        </p>
      </div>
    </footer>
  )
}

export default Footer