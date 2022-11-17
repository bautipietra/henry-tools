import React from 'react'
import s from './LinkPanel.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { GoTrashcan } from 'react-icons/go'
import { useState } from 'react'

function LinkPanel({ close, link, links, setLinks }) {

  const [validate, setValidate] = useState({
    nameV: false,
    urlV: false,
    name: '',
    url: '',
  })

  const submitHandler = (e) => {
    e.preventDefault()
    if (validate.nameV && validate.urlV) {
      setLinks([
        ...links, {
          name: `${validate.name}`,
          url: `${validate.url}`,
        }
      ])
    }
    console.log(links);
  }

  function nameHandler(e) {
    if (e.target.value.length < 1) {
      setValidate({ ...validate, nameV: false })
      document.querySelector('#nameError').textContent = 'Ingresa un nombre'
    }
    else {
      setValidate({ ...validate, nameV: true, name: `${e.target.value}` })
      document.querySelector('#nameError').textContent = ''
    }
  }

  function urlHandler(e) {
    console.log(e.target.value);
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    setValidate({ ...validate, urlV: pattern.test(e.target.value), url: `${e.target.value}` })
    if (!validate.urlV) document.querySelector('#urlError').textContent = 'Ingresa una URL valida'
    else if (!validate.url.startsWith('http')) { setValidate({ ...validate, urlV: pattern.test(e.target.value), url: `https://${e.target.value}` }) }
    else document.querySelector('#urlError').textContent = ''
  }

  function deleteHandler(name) {
    const index = links.findIndex(object => {
      return object.name == name;
    });
    setLinks([
      ...links.slice(index - 1, index)
    ])
  }

  return (

    (link) && <div className={s.panelContainer}>
      <div className={s.panel}>

        <div className={s.panelTitle}>
          <h6>Modifica tus links!</h6>
          <AiOutlineClose onClick={() => close()} size='35px'></AiOutlineClose>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Ingresa el nombre' onChange={nameHandler} required autoComplete='false' />
          <span id='nameError' className={s.error} >Ingresa un nombre</span>
          <input type="text" name='url' placeholder='Ingresa la URL' onChange={urlHandler} required autoComplete='false' />
          <span id='urlError' className={s.error} >Ingresa una URL valida</span>
          <input type="submit" onClick={submitHandler} value='Agregar' />
        </form>

        <div className={s.links}>{
          links.map(link => {
            return (
              <div>
                <a href={link.url} target='_blank'>{link.name}</a>
                <GoTrashcan onClick={() => deleteHandler(link.name)}></GoTrashcan>
              </div>
            )
          })
        }</div>

      </div>
    </div >
  )
}

export default LinkPanel