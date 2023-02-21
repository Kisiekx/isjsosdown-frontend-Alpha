import React from "react";

import {TopBar} from "./components/TopBar/TopBar";
import {Baner} from "./components/Baner/Baner";



export interface serviceData {
    name: string,
}

const jsos:serviceData = { name: "JSOS"}

export const Home: React.FC = () => {


    return (
        <>
            <TopBar/>
            <Baner jsosData={jsos}/>
        </>
    );
}


