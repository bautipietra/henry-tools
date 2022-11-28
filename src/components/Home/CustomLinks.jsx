import React from 'react'
import s from './Home.module.scss'
import { BsInfoLg, BsLink45Deg } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { useState } from 'react'
import LinkPanel from '../LinkPanel/LinkPanel'
import { useEffect } from 'react'
import useLocalStorageState from 'use-local-storage-state'

function CustomLinks({ modal }) {

  const iconSize = '40px'
  let id = 0

  const [linkPanel, setLinkPanel] = useState(false)

  const openPanel = () => setLinkPanel(true)
  const closePanel = () => setLinkPanel(false)

  const [links, setLinks] = useLocalStorageState('links', {
    defaultValue: [

      {
        name: 'Ejemplo',
        url: 'https://www.linkedin.com/in/bautista-pietraroia/',
      },

    ]
  })

  return (
    <div className={s.utilities}>
      <h4><BsInfoLg onClick={() => modal(0)}></BsInfoLg>Links personalizados<FiSettings onClick={() => openPanel()}></FiSettings></h4>
      <div className={s.utilitiesContainer}>
        {
          links.map(link => {
            return (
              <a href={link.url} target={'_blank'} key={link.id} className={`${s.utilityContainer} ${s.width}`}>
                <span>{link.name}</span>
                <BsLink45Deg size={iconSize}></BsLink45Deg>
              </a>
            )
          })
        }
      </div>
      <LinkPanel close={closePanel} link={linkPanel} links={links} setLinks={setLinks}></LinkPanel>
    </div>
  )
}

export default CustomLinks