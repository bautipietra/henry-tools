import React from 'react'
import LogoHenry from '../../assets/ISOLOGO_HENRY_BLACK.png'
import BautistaPietraroia from '../../assets/bautista-pietraroia.png'
import s from './Nav.module.scss'
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        <NavLink to={'/'} className={s.imgLink}>
          <img src={LogoHenry} alt="Henry" />
        </NavLink>
        <NavLink to={'/'} className={s.txtLink}>Tools</NavLink>
      </div>
      <div className={s.credits}>
        <a href="https://www.linkedin.com/in/bautista-pietraroia-b79271214/" target='_blank'>
          <img src={BautistaPietraroia} alt="Bautista Pietraroia" />
        </a>
      </div>
    </nav>
  )
}

export default Nav