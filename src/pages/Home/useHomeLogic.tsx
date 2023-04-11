import {useEffect, useState} from "react";
import { IServiceData, IServiceDataRaw, IServicesRawStatus, IWorkingServiceData} from "../../types/main.types";
import { connectToWebsocket, getInitialStats} from "../../lib/fetch";
import { isFailingServiceType} from "../../lib/typeGuards";
import { IMessage } from "@stomp/stompjs";


const switchElementToTop = (arr:any[], comparator:(arg:any)=>boolean)=>{
    const indexOfElementToSwitch = arr.findIndex(comparator)

            if(indexOfElementToSwitch>-1){
                [arr[0],arr[indexOfElementToSwitch]]= [arr[indexOfElementToSwitch], arr[0]]
            }
}

const getServiceNameToTop=(name:string)=>(service:IServiceData)=>{
    return service.title===name
}


export const useHomeLogic = () => {

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

    const updateFromWebSockets=(message:IMessage)=>{
        
        console.log(JSON.parse(message.body))

        setServices((servicesArg:IServiceData[])=>{
            
            const messageValue = JSON.parse(message.body)
            const newServices = [...servicesArg]
            const updatedService = newServices.find((service:IServiceData)=>service["title"]===messageValue["service"])

            if(updatedService){
                for(const key of Object.keys(messageValue)){
                    if(key!=="service"){
                        updatedService[key]=messageValue[key]

                        if(key==="downSince"){
                            updatedService.downSince = messageValue.downSince
                            updatedService.downSinceDate=new Date(messageValue[key]).toString()
                            updatedService.isActive=false
                        }else if(key==="downTill"){

                            delete updatedService.downSince
                            delete updatedService.downSinceDate
                            updatedService.isActive=true
                        }
                    }
                    
                
                }
            }
            switchElementToTop(newServices, getServiceNameToTop("jsos"))

            return newServices
            })
        

    }

    useEffect(()=>{

        getInitialStats().then((recievedServices:IServicesRawStatus) => {

            const downServices = formatServices(recievedServices.downServices, false)
            const runningServices = formatServices(recievedServices.runningServices, true)

            const allServices = downServices.concat(runningServices)
            switchElementToTop(allServices, getServiceNameToTop("jsos"))

            setServices(allServices)
    
    
        })


    },[])

    useEffect(()=>{
        connectToWebsocket(updateFromWebSockets);
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