import {JsosTileContainer, JsosTileName, JsosStatsContainer, JsosStats} from './Tiles.style'
import {serviceData} from "../../interfaces/serviceData";

interface JSOStileProps {
    jsosData?: serviceData
}

export const JsosTile = (props: JSOStileProps) => {

    return (
        <>
            <JsosTileContainer>
                <JsosTileName>
                    {props.jsosData?.name}
                </JsosTileName>
                <JsosStatsContainer>
                    <JsosStats>status: aktywny</JsosStats>
                    <JsosStats>uptime: {props.jsosData?.uptime}%</JsosStats>
                    <JsosStats>ostatnia awaria: {props.jsosData?.lastActive.toDateString()}</JsosStats>
                </JsosStatsContainer>

            </JsosTileContainer>
        </>
    )

}