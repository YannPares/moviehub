import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing/Landing"
import SignUp from "../pages/SignUp/SignUp"
import Movies from "../pages/Movies/Movies"
import { FC } from "react"
import PrivateRoutes from "./PrivateRoutes.routes"


const RoutesComponent:FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/*' element= {
        <PrivateRoutes>
          <Routes>
            <Route path='/movies' element={<Movies/>} />
            
          
          </Routes>
        </PrivateRoutes>
      } />
    </Routes>  
  )
}

export default RoutesComponent