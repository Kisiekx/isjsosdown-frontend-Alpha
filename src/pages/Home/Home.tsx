import React from "react";

import {TopBar} from "../../components/TopBar/TopBar";
import {Baner} from "./components/Baner/Baner";
import {ServicesStatus} from "./components/ServicesContainer/ServicesStatus";
import {HomeLogic} from "./HomeLogic";


const ServiceDetails = ()=>{
    return <div>Service Details</div>
}
const ErrorPage = ()=>{
    return <div>ErrorPage</div>
}


export const Home: React.FC = () => {

    const {services} = HomeLogic()


    return (
        <>
            <TopBar/>
            <Baner jsosData={services[0]}/>
            <ServicesStatus services={services}/>

        </>
    );
}


