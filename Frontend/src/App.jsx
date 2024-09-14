import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import {Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/update/:id' element={<Update/>} ></Route>
      <Route path='/create' element={<Create/>} ></Route>
    </Routes>
    </>
  )
}

export default App
