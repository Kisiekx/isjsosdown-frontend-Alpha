import { Params, useParams } from "react-router-dom";
import {ServiceDetailsBackground, ServiceDetailsContainer} from "./ServiceDetailsPage.style";
import { ServiceDetailsPageLogic } from "./ServiceDetailsPageLogic";

export interface IServiceID{
    serviceID: string; //Possibly gonna change
}

export const ServiceDetailsPage = () => {

    const {serviceID} = ServiceDetailsPageLogic(useParams() as Readonly<Params<string>>& IServiceID) 
    console.log(serviceID);

    return (
        <ServiceDetailsBackground>
            <ServiceDetailsContainer>Service details: {serviceID}</ServiceDetailsContainer>
        </ServiceDetailsBackground>
       
    )

}