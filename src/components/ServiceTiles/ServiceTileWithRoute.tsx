import { NavLink } from "react-router-dom";
import { ServiceTile } from "./ServiceTile";

import {ServiceTileProps} from "./ServiceTile";

export const ServiceTileWithRoute = (props:ServiceTileProps) => {

    return (
        <NavLink to={`/service/${props.serviceData.name}`}>
            <ServiceTile serviceData={props.serviceData}/>
        </NavLink>
    )
};

