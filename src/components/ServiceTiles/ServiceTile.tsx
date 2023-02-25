import {
    TileContainer,
    TileName,
    StatsContainer,
    ServiceStats,
    ChartContainer,
    TopTileWrapper,
    StatusDot
} from './Tiles.style'
import {IServiceData} from "../../interfaces/serviceData";
import {useEffect, useState} from "react";

interface ServiceTileProps {
    serviceData: IServiceData
}

export const ServiceTile = (props: ServiceTileProps) => {

    const [activityColor, setActivityColor] = useState<string>()

    useEffect(() =>{
        setActivityColor(
            props.serviceData?.isActive ? "green" : "red"
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