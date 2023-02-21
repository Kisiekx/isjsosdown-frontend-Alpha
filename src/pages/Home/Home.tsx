import React from "react";

import {TopBar} from "./components/TopBar/TopBar";
import {Baner} from "./components/Baner/Baner";
import {ServicesContainer} from "./components/ServicesContainer/ServicesContainer";
import { serviceData } from "../../interfaces/serviceData"


const jsos:serviceData = { isActive: true, name: "JSOS", lastActive: new Date(1677020205), uptime: 98.27}

export const Home: React.FC = () => {


    return (
        <>
            <TopBar/>
            <Baner jsosData={jsos}/>
            <ServicesContainer/>
        </>
    );
}


