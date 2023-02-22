import {
    JsosTileContainer,
    TileName,
    StatsContainer,
    ServiceStats,
    ChartContainer,
    TopTileWrapper,
    StatusDot
} from './Tiles.style'
import {serviceData} from "../../interfaces/serviceData";
import {useEffect, useState} from "react";

interface JSOStileProps {
    jsosData?: serviceData
}

export const JsosTile = (props: JSOStileProps) => {

    const [activityColor, setActivityColor] = useState<string>()

    useEffect(() =>{
        setActivityColor(
            props.jsosData?.isActive ? "green" : "red"
        )
    }, [props.jsosData])

    return (
        <>
            <JsosTileContainer>

                <TopTileWrapper>
                    <StatusDot invisible={true}/>
                    <TileName>
                        {props.jsosData?.name}
                    </TileName>
                    <StatusDot color={activityColor}/>
                </TopTileWrapper>

                <StatsContainer>
                    <ServiceStats>status: aktywny</ServiceStats>
                    <ServiceStats>uptime: {props.jsosData?.uptime}%</ServiceStats>
                    <ServiceStats>ostatnia awaria: {props.jsosData?.lastActive.toDateString()}</ServiceStats>
                    <ServiceStats>czas działania: Test</ServiceStats>
                </StatsContainer>

                <ChartContainer>

                </ChartContainer>

            </JsosTileContainer>
        </>
    )

}