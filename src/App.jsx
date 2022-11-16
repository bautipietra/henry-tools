import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Styles from './app.scss'
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Modulo from "./components/Modulo/Modulo"
import Modal from "./components/Modal/Modal"
import Announce from "./components/Announce/Announce"
import { useState } from "react"

function App() {

  const [modal, setModal] = useState({
    state: false,
    num: Number(),
  })

  const modalHandler = (num) => {
    setModal({
      state: true,
      num: num
    })
  }

  const closeModal = () => {
    setModal({
      state: false,
      num: Number(),
    })
  }

  return (
    <div className="App">
      <Announce></Announce>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<><Home modal={modalHandler}></Home><Modal modal={modal} close={closeModal}></Modal></>}></Route>
        <Route exact path="/modulo/:id" element={<Modulo></Modulo>}></Route>
        <Route path="*" element={<><Home modal={modalHandler}></Home><Modal modal={modal} close={closeModal}></Modal></>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
