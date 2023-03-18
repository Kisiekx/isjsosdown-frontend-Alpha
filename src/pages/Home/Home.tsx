import React from "react";

import {TopBar} from "../../components/TopBar/TopBar";
import { getInitialStats } from "../../lib/fetch";
import { IServiceData } from "../../types/main.types";
import {Baner} from "./components/Baner/Baner";
import {ServicesStatus} from "./components/ServicesContainer/ServicesStatus";
import {HomeLogic} from "./HomeLogic";



export const Home: React.FC = () => {


    const services =  HomeLogic()


    return (
        <>
            <TopBar/>
            <Baner jsosData={services[0]}/>
            <ServicesStatus services={services}/>

        </>
    );
}


