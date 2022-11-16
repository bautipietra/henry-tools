import React from 'react'
import Countdown from 'react-countdown-simple';
import s from './Announce.module.scss'

function Announce() {

  const oneHour = new Date(
    new Date("November 21, 2022 21:00:00")
  ).toISOString();

  return (
    <div className={s.announce}>
      <p>Workshop "Diseño para desarrolladores" <strong><a href="https://www.youtube.com/watch?v=2xI-m34qZ9w" target='_blank'>aquí</a></strong></p>
      <Countdown targetDate={oneHour} formatType="d_h_m_s" />
    </div>
  )
}

export default Announce