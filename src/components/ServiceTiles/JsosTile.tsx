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

interface JSOStileProps {
    jsosData?: IServiceData
}

export const JsosTile = (props: JSOStileProps) => {

    const [activityColor, setActivityColor] = useState<string>()

    useEffect(() =>{
        setActivityColor(
            props.jsosData?.isActive ? globalColors.green : globalColors.red
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