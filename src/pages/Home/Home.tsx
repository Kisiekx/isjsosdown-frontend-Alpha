import React from "react";

import {TopBar} from "../../components/TopBar/TopBar";
import {Baner} from "./components/Baner/Baner";
import {ServicesStatus} from "./components/ServicesContainer/ServicesStatus";
import {HomeLogic} from "./HomeLogic";

export const Home: React.FC = () => {

    const {services} = HomeLogic()

    console.log(services)

    return (
        <>
            <TopBar/>
            <Baner jsosData={services[0]}/>
            <ServicesStatus services={services}/>

        </>
    );
}


