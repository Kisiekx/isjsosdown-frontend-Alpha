import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from "./pages/Home/Home";
import reportWebVitals from './reportWebVitals';
import GlobalStyle from "./assets/global.style";
import './assets/fonts.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const ServiceDetails = ()=>{
  return <div>Service Details</div>
}
const ErrorPage = ()=>{
  return <div>ErrorPage</div>
}
const RouterComponent = (props:any)=>{
  return(
  <>
        <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/service/:serviceID" element={<ServiceDetails/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
     
  </>);

}

root.render(
  <React.StrictMode>
    <Router>
      <RouterComponent/>
      <GlobalStyle/>
    </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
