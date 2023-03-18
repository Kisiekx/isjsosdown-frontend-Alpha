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

export interface ServiceTileProps {
    serviceData: IServiceData
}

export const ServiceTile = (props: ServiceTileProps) => {

    const [activityColor, setActivityColor] = useState<string>()

    useEffect(() =>{
        setActivityColor(
            props.serviceData?.isActive ? globalColors.green : globalColors.red
        )
    }, [props.serviceData])

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
                    {props.serviceData.downSince?
                        <ServiceStats>czas rozpoczęcia awarii: {props.serviceData.downSinceDate}</ServiceStats>
                        :""
                    }
                    <ServiceStats>czas działania: Test</ServiceStats>
                </StatsContainer>

                <ChartContainer>

                </ChartContainer>

            </TileContainer>
        </>
    )

}