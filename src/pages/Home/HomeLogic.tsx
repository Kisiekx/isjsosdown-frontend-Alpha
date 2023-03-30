import {useEffect, useState} from "react";
import { IServiceData, IServiceDataRaw, IServicesRawStatus, IWorkingServiceData} from "../../types/main.types";
import { getInitialStats } from "../../lib/fetch";
import { isFailingServiceType} from "../../lib/typeGuards";


export const HomeLogic = () => {

    const [services, setServices] = useState<IServiceData[]>([])
    
    const formatServices = (services: IServiceDataRaw[], isActive: boolean):IServiceData[] => {
        
        return services.map((service:IServiceDataRaw)=>{
            if(isFailingServiceType(service)){
                return {...service, isActive: isActive, downSinceDate: (new Date(service.downSince).toString())}
            }else{
                return {...(service as IWorkingServiceData), isActive: isActive} 
            }
        })
            
    }

    useEffect(()=>{

        getInitialStats().then((recievedServices:IServicesRawStatus) => {

            const downServices = formatServices(recievedServices.downServices, false)
            const runningServices = formatServices(recievedServices.runningServices, true)

            const allServices = downServices.concat(runningServices)
            const jsosIndex = allServices.findIndex((service)=>service.title==="JSOS")

            if(jsosIndex>-1){
                [allServices[0],allServices[jsosIndex]]= [allServices[jsosIndex], allServices[0]]
            }

            setServices(allServices)
    
    
        })


    },[])
    
    console.log(services)

    return services

}

/*
const exampleServices: IServiceData[] = [
    {
        isActive: true,
        name: "Testowy serwis 1",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: false,
        name: "btone.tech crewportal",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: true,
        name: "RecycleR",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: false,
        name: "JSOR",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: true,
        name: "asystenta asystenta zapisowego",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: false,
        name: "PWr API",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: false,
        name: "WMS_DEV 1",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: true,
        name: "WMS_DEV 2",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: false,
        name: "WMS_DEV 3",
        lastActive: new Date(),
        uptime: 92.58
    },
    {
        isActive: true,
        name: "frontend",
        lastActive: new Date(),
        uptime: 92.58
    },
]

*/