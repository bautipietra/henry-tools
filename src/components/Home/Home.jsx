import React from 'react'
import s from './Home.module.scss'
import { RiBookMarkLine, RiSlideshowLine, RiCalendar2Line, RiSuitcaseLine, RiStickyNoteLine } from "react-icons/ri";
import { BsInfoLg, BsLink45Deg } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
import CustomLinks from './CustomLinks';

function Home({ modal }) {

  const iconSize = '40px'

  return (
    <div className={s.home}>

      {/* Links personalizados */}
      <CustomLinks modal={modal}></CustomLinks>

      {/* Links de Henry */}
      <div className={s.utilities}>
        <h4><BsInfoLg onClick={() => modal(1)}></BsInfoLg>Links de Henry</h4>
        <div className={s.utilitiesContainer}>
          <a href="https://docs.google.com/spreadsheets/d/1Y2ydZZ6ZgBQpl-vm9gJi0kKXzGIPETpriZOaTBnY_Xc/edit#gid=0" target={'_blank'} className={`${s.utilityContainer} ${s.width}`}>
            <span>Calendario</span>
            <RiCalendar2Line size={iconSize}></RiCalendar2Line>
          </a>
          <a href="https://www.students.soyhenry.com/" target={'_blank'} className={`${s.utilityContainer} ${s.width}`}>
            <span>Students</span>
            <RiSuitcaseLine size={iconSize}></RiSuitcaseLine>
          </a>
        </div>
      </div>

      {/* Links útiles */}
      <div className={s.utilities}>
        <h4><BsInfoLg onClick={() => modal(2)}></BsInfoLg>Links útiles</h4>
        <div className={s.utilitiesContainer}>
          <a href="https://sugared-amusement-2aa.notion.site/Slides-d460c21cd83647189d0b9a47453668ab" target={'_blank'} className={`${s.utilityContainer} ${s.width}`}>
            <span>Slides</span>
            <RiBookMarkLine size={iconSize}></RiBookMarkLine>
          </a>
          <a href="https://fire-taurus-8fa.notion.site/RESUMENES-BOOTCAMP-87677d2551bc4a14b015879502ee6686" target={'_blank'} className={`${s.utilityContainer} ${s.width}`}>
            <span>Resúmenes</span>
            <RiSlideshowLine size={iconSize}></RiSlideshowLine>
          </a>
        </div>
      </div>

      {/* Checkpoints */}
      <div className={s.utilities}>
        <h4><BsInfoLg onClick={() => modal(3)}></BsInfoLg>Checkpoints</h4>
        <div className={s.utilitiesContainer}>

          <NavLink to={'/modulo/0'} className={`${s.utilityContainer} ${s.dark}`}>
            <span>Prep</span>
            <RiStickyNoteLine size={iconSize}></RiStickyNoteLine>
          </NavLink>

          <NavLink to={'/modulo/1'} className={`${s.utilityContainer} ${s.dark}`}>
            <span>M1</span>
            <RiStickyNoteLine size={iconSize}></RiStickyNoteLine>
          </NavLink>

          <NavLink to={'/modulo/2'} className={`${s.utilityContainer} ${s.dark}`}>
            <span>M2</span>
            <RiStickyNoteLine size={iconSize}></RiStickyNoteLine>
          </NavLink>

          <NavLink to={'/modulo/3'} className={`${s.utilityContainer} ${s.dark}`}>
            <span>M3</span>
            <RiStickyNoteLine size={iconSize}></RiStickyNoteLine>
          </NavLink>

          <NavLink to={'/modulo/4'} className={`${s.utilityContainer} ${s.dark}`}>
            <span>PI</span>
            <RiStickyNoteLine size={iconSize}></RiStickyNoteLine>
          </NavLink>

        </div>
      </div>

    </div >
  )
}

export default Home