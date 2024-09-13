import './App.css'
import AboutPage from './pages/about'
import HomePage from './pages/home'

import {Routes, Route} from "react-router-dom"
import Packages from './pages/packages'

function App() {

  return (
   <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/packages' element={<Packages />} />
      </Routes>
   </div>
  )
}

export default App
