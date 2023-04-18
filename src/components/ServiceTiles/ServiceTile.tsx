import {
    TileContainer,
    TileName,
    StatsContainer,
    ServiceStats,
    ChartContainer,
    TopTileWrapper,
    StatusDot
} from './Tiles.style'
import {IServiceData} from "../../types/main.types"
import {useEffect, useState} from "react";
import {globalColors} from "../../assets/globalStyleVariables";
import { isFailingServiceType } from '../../lib/typeGuards';
import { AvailabilityChart } from '../AvailabilityCharts/AvailabilityChart';

export interface ServiceTileProps {
    serviceData: IServiceData
}

export const ServiceTile = (props: ServiceTileProps) => {

    const [activityColor, setActivityColor] = useState<string>()

    useEffect(() =>{
        setActivityColor(
            props.serviceData?.isActive ? globalColors.brightGreen : globalColors.brightRed
        )
        
    },[props.serviceData.isActive])

    useEffect(()=>{
        console.log(props.serviceData.downtimes)
    })

    return (
        <>
            <TileContainer>

                <TopTileWrapper>
                    <StatusDot invisible={true}/>
                    <TileName>
                        {props.serviceData.title}
                    </TileName>
                    <StatusDot color={activityColor}/>
                </TopTileWrapper>

                <StatsContainer>
                    <ServiceStats>status: {props.serviceData.isActive?"aktywny":"nie aktywny"}</ServiceStats>
                    <ServiceStats>uptime: {props.serviceData.uptime}%</ServiceStats>
                    {isFailingServiceType(props.serviceData)?
                        <ServiceStats>czas rozpoczęcia awarii: {props.serviceData.downSinceDate}</ServiceStats>
                        :""
                    }
                    <ServiceStats>czas działania: Test</ServiceStats>
                </StatsContainer>

                <ChartContainer>
                    <AvailabilityChart downtimes={props.serviceData.downtimes}/>
                </ChartContainer>

            </TileContainer>
        </>
    )

}