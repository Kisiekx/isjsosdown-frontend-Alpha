

export interface IServiceDetailsData{
    ///To be implemented
    serviceID:string
}

export interface IServicesRawStatus{
    downServices: IServiceDataRaw[]
    runningServices: IServiceDataRaw[]
}
export interface IServiceDataRaw{
    title: string,
    uptime: number,
    downtimes: DownTime[],
    downSince?:number,
    [id:string]:string|number|DownTime[]|boolean|undefined
    
}
export type IWorkingServiceData = {
    [Property in keyof IServiceDataRaw as Exclude<Property,"downSince">]: IServiceDataRaw[Property]
} & {isActive: boolean}

export interface IFailingServiceData extends IWorkingServiceData{
    downSince:number
    downSinceDate: string
}

export type IServiceData =   IWorkingServiceData | IFailingServiceData

export interface IServicesData{
    services : IServiceData[]
}

export type DownTime = {
    downSince: number,
    downTill: number
}|{downSince:number}
 |{downTill:number}