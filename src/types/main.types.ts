

export interface IServiceDetailsData{
    ///To be implemented
    serviceID:string
}
export interface DownTime{
    downSince: number,
    downTill: number
}
export interface IServicesRawStatus{
    downServices: IServiceDataRaw[]
    runningServices: IServiceDataRaw[]
}
export interface IServiceDataRaw{
    title: string,
    uptime: number,
    downtime: DownTime[]
    downSince?:number
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
