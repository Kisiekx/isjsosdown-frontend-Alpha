import {
    JsosTileContainer,
    TileName,
    StatsContainer,
    ServiceStats,
    ChartContainer,
    TopTileWrapper,
    StatusDot
} from './Tiles.style'
import {IServiceData} from "../../types/main.types";
import {useEffect, useState} from "react";
import {globalColors} from "../../assets/globalStyleVariables";
import { isFailingServiceType } from '../../lib/typeGuards';
import { AvailabilityChart } from '../AvailabilityCharts/AvailabilityChart';

interface JSOStileProps {
    jsosData: IServiceData
}

export const JsosTile = (props: JSOStileProps) => {

    const [activityColor, setActivityColor] = useState<string>()

    useEffect(() =>{
        setActivityColor(
            props.jsosData?.isActive ? globalColors.green : globalColors.red
        )
    }, [props.jsosData.isActive])

    return (
        <>
            <JsosTileContainer>

                <TopTileWrapper>
                    <StatusDot invisible={true}/>
                    <TileName>
                        {props.jsosData?.title}
                    </TileName>
                    <StatusDot color={activityColor}/>
                </TopTileWrapper>

                <StatsContainer>
                    <ServiceStats>status:  {props.jsosData.isActive?"aktywny":"nie aktywny"}</ServiceStats>
                    <ServiceStats>uptime: {props.jsosData?.uptime}%</ServiceStats>
                    <ServiceStats>czas działania: Test</ServiceStats>
                    {isFailingServiceType(props.jsosData)?
                        <ServiceStats>czas rozpoczęcia awarii: {props.jsosData.downSinceDate}</ServiceStats>
                        :<br/>
                    }
                    
                </StatsContainer>

                <ChartContainer>
                    <AvailabilityChart downtimes={props.jsosData.downtimes}/>
                </ChartContainer>

            </JsosTileContainer>
        </>
    )

}