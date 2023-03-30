import {IServiceData, IFailingServiceData,IWorkingServiceData, IServiceDataRaw} from "../types/main.types"

export function isFailingServiceType(service:IServiceDataRaw | IServiceData): service is IFailingServiceData{
    return "downSince" in service
}
export function isWorkingServiceType(service:IServiceDataRaw |IServiceData): service is IWorkingServiceData{
    return !("downSince" in service)
}