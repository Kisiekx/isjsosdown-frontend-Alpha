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
                        {props.serviceData.name}
                    </TileName>
                    <StatusDot color={activityColor}/>
                </TopTileWrapper>

                <StatsContainer>
                    <ServiceStats>status: aktywny</ServiceStats>
                    <ServiceStats>uptime: {props.serviceData.uptime}%</ServiceStats>
                    <ServiceStats>ostatnia awaria: {props.serviceData.lastActive.toDateString()}</ServiceStats>
                    <ServiceStats>czas działania: Test</ServiceStats>
                </StatsContainer>

                <ChartContainer>

                </ChartContainer>

            </TileContainer>
        </>
    )

}