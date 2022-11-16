import React from 'react'
import s from './Modal.module.scss'
import { AiOutlineClose } from 'react-icons/ai'

function Modal({ modal, close }) {

  var data = [
    {
      title: 'Links personalizados',
      description: `Aquí podrás agregar links a todo lo que necesites, sin necesidad de que sea agregado oficialmente a la página, igualmente, si consideras que hay un link que le podría servir al resto de los alumnos, puedes recomendarmelo por MP en mi linkedin!.`,
    },
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
            <h6>{data[modal.num].title}</h6>
            <AiOutlineClose onClick={() => close()} size='35px'></AiOutlineClose>
          </div>
          <p id='description'>{data[modal.num].description}</p>
        </div>
      </div>
    )
  )
}

export default Modal