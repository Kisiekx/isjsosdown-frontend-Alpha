import { ServiceTile } from "./ServiceTile";

import {ServiceTileProps} from "./ServiceTile";
import {LinkWrapper} from "./Tiles.style"

export const ServiceTileWithRoute = (props:ServiceTileProps) => {

    return (
        <LinkWrapper to={`/service/${props.serviceData.name}`}>
            <ServiceTile serviceData={props.serviceData}/>
        </LinkWrapper>
    )
};

