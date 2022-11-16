import React from 'react'
import s from './Modal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({ modal, close }) {

  var data = [
    {
      title: 'Links de Henry',
      description: `Aquí aparecerán unicamente redirecciones hacia sitios oficiales del bootcamp.`,
    },
    {
      title: 'Links Útiles',
      description: `Aquí aparecerán links hacia sitios NO oficiales de Soy Henry, pueden ser redirecciones a sitios creados por otros alumnos, o a páginas que no tienen relación con el bootcamp pero que podrían serte de ayuda.`,
    },
    {
      title: 'Checkpoints',
      description: `Aquí aparecerán repositorios con checkpoints de prueba, con una estructura y lógica muy similar a los checkpoints reales, con estos podrás practicar para llegar de la mejor forma al examen.`,
    },
  ]

  return (
    modal.state && (
      <div className={s.modalContainer}>
        <div className={s.modal}>
          <div className={s.modalTitle}>
            <h6>{data[modal.num - 1].title}</h6>
            <AiOutlineClose onClick={() => close()} size='35px'></AiOutlineClose>
          </div>
          <p id='description'>{data[modal.num - 1].description}</p>
        </div>
      </div>
    )
  )
}

export default Modal