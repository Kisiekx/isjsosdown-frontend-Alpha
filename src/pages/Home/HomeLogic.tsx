import {useEffect, useState} from "react";
import {IServiceData} from "../../interfaces/serviceData";

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
        isActive: false,
        name: "frontend",
        lastActive: new Date(),
        uptime: 92.58
    },
]



export const HomeLogic = () => {

    const [services, setServices] = useState<IServiceData[]>([])

    useEffect(() =>{
        setServices(exampleServices)
        console.log("STate changed")
    }, [])

    return{services}

}
