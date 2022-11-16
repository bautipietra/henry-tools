import React from 'react'
import { useParams } from 'react-router-dom'
import s from './Modulo.module.scss'
import { FaGithub } from "react-icons/fa"

function Modulo() {
  const { id } = useParams()

  var data = [

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
    ],

    [
      {
        name: 'M2 1',
        module: 2,
        cp: 1,
      },
      {
        name: 'M2 2',
        module: 2,
        cp: 2,
      },
      {
        name: 'M2 3',
        module: 2,
        cp: 3,
      },
      {
        name: 'M2 4',
        module: 2,
        cp: 4,
      },
      {
        name: 'M2 5',
        module: 2,
        cp: 5,
      },
      {
        name: 'M2 6',
        module: 2,
        cp: 6,
      },
    ],
    [{
      name: 'M3 1',
      module: 3,
      cp: 1,
    },
    {
      name: 'M3 2',
      module: 3,
      cp: 2,
    },],
    []
  ]

  if (!data[id - 1]) return <div className={s.noCP}>
    <p>Este modulo no existe 🤔</p>
  </div>

  if (data[id - 1].length) {
    return (
      <div className={s.cpContainer}>
        {

          data[id - 1].map(cp => {

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