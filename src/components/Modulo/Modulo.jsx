import React from 'react'
import { useParams } from 'react-router-dom'
import s from './Modulo.module.scss'
import { FaGithub } from "react-icons/fa"

function Modulo() {
  const { id } = useParams()

  var data = [

    [
      {
        name: 'Prep 1',
        module: 0,
        cp: 1,
      },
      {
        name: 'Prep 2',
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

    [
      {
        name: 'Food API',
        module: 4,
        cp: 1,
      },
      {
        name: 'Pokemon API',
        module: 4,
        cp: 2,
      },
    ]
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
  }

  else {
    return (
      <div className={s.noCP}>
        <p>Aun no tenemos checkpoints de este modulo 😔</p>
      </div>
    )
  }
}

export default Modulo