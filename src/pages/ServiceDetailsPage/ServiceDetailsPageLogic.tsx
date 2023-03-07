import { IServiceID } from "./ServiceDetailsPage";
import {useEffect, useState} from "react";
import { IServiceDetailsData } from "../../types/main.types";


export const ServiceDetailsPageLogic = (prop:IServiceID) => {



    const [serviceData, setServiceData] = useState<IServiceDetailsData>({serviceID:""});

    useEffect(()=>{setServiceData({serviceID:prop.serviceID})}, []);

    //To be implemented

    return serviceData;



}