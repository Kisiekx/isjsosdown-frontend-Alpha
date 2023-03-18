
/*
export interface IServiceData {
    isActive: boolean,
    name: string,
    lastActive: Date,
    uptime: number,
}
*/
export interface IServiceDetailsData{
    ///To be implemented
    serviceID:string
}
export interface DownTime{
    downSince: number,
    downTill: number
}
export interface IServiceDataRaw{
    title: string,
    uptime: number,
    downtime: DownTime[]
    downSince?: number
}
export interface IServicesRawStatus{
    downServices: IServiceDataRaw[]
    runningServices: IServiceDataRaw[]
}
export interface IServicesData{
    services : IServiceData[]
}

export type IServiceData = IServiceDataRaw & {isActive: boolean, downSinceDate?:string}