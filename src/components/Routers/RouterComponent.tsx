import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom'

import { ErrorPage } from "../../pages/ErrorPage/ErrorPage"
import { ServiceDetailsPage } from '../../pages/ServiceDetailsPage/ServiceDetailsPage';
import { Home } from "../../pages/Home/Home";


export const RouterComponent = ()=>{
    return(
    <>
      <Router>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/service/:serviceID" element={<ServiceDetailsPage/>}/>
                    <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
      </Router>   
    </>);
  
  }