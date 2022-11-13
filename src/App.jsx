import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav/Nav"
import Styles from './app.scss'
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Modulo from "./components/Modulo/Modulo"

function App() {

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route exact path="/modulo/:id" element={<Modulo></Modulo>}></Route>
        <Route path="*" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
