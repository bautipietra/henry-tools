import React from 'react'
import { useParams } from 'react-router-dom'
import s from './Modulo.module.scss'
import { FaGithub } from "react-icons/fa"

function Modulo() {
  const { id } = useParams()

  var data = [
    [
      {
        name: 'Challenge 1',
        module: 0,
        cp: 1,
      },
      {
        name: 'Challenge 2',
        module: 0,
        cp: 2,
      },
    ],

    [
      {
        name: 'M1 1',
        module: 1,
        cp: 1,
      },
      {
        name: 'M1 2',
        module: 1,
        cp: 2,
      },
      {
        name: 'M1 3',
        module: 1,
        cp: 3,
      },
    ],

    [
      {
        name: 'M2 Henry Palooza',
        module: 2,
        cp: 1,
      },
      {
        name: 'M2 Houses',
        module: 2,
        cp: 2,
      },
      {
        name: 'M2 Game of Thrones',
        module: 2,
        cp: 3,
      },
    ],
    [],
    [],
  ]

  if (!data[id]) return <div className={s.noCP}>
    <p>Este modulo no existe 🤔</p>
  </div>

  if (data[id].length) {
    return (
      <div className={s.cpContainer}>
        {

          data[id].map(cp => {

            return <div key={cp.name} className={s.cp}>
              <p>{cp.name}</p>
              <a href={`https://github.com/henry-tools/m${cp.module}-${cp.cp}`} target='_blank'>Repositorio <FaGithub></FaGithub></a>
            </div>

          })
        }
      </div >
    )
  } else {
    return (
      <div className={s.noCP}>
        <p>Aun no tenemos checkpoints de este modulo 😔</p>
      </div>
    )
  }
}

export default Modulo