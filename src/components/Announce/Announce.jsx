import React from 'react'
import Countdown from 'react-countdown-simple';
import s from './Announce.module.scss'

function Announce() {

  // +3hs

  let workshops = true
  let live = false

  let allDates = [new Date("November 29, 2022 23:00:00")]

  let aux = 0
  let dateLocal = allDates[aux]
  let currentDate = new Date()

  for (let i = 0; i < allDates.length; i++) {
    if (currentDate > dateLocal && allDates[aux + 1]) {
      aux++
      dateLocal = allDates[aux]
    }
    else if (currentDate > dateLocal && !allDates[aux + 1]) {
      workshops = false
    }
  }

  const oneHour = new Date(
    new Date(dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000)
  ).toISOString();

  if ((dateLocal.getTime() - dateLocal.getTimezoneOffset() * 60 * 1000) < currentDate.getTime() && currentDate.getTime() < dateLocal.getTime()) {
    console.log('estamos live');
    live = true
  }

  return (
    <div className={s.announce} id='announce'>
      {
        live ? <p><strong>🔴 Workshop en directo! <a href="https://www.youtube.com/@soyhenryok/streams" target='_blank'>aquí</a></strong></p> :
          workshops ? (<>      <p>Proximo Workshop <strong><a href="https://www.youtube.com/@soyhenryok/streams" target='_blank'>aquí</a></strong></p>
            <Countdown targetDate={oneHour} formatType="d_h_m_s" /></>) :
            <p><strong>No hay próximos workshops 😔, <br></br> puedes revisar por tu cuenta <a href="https://www.youtube.com/@soyhenryok/streams" target='_blank'>aquí</a> </strong></p>
      }
    </div>
  )
}

export default Announce
