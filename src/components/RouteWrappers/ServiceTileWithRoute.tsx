import { NavLink } from "react-router-dom";
import {IServiceData} from "../../interfaces/ServiceData";
import { ServiceTile } from "../ServiceTiles/ServiceTile";

import {ServiceTileProps} from "../ServiceTiles/ServiceTile";

export const ServiceTileWithRoute = (props:ServiceTileProps) => {

    return (
        <NavLink to={`/service/${props.serviceData.name}`}>
            <ServiceTile serviceData={props.serviceData}/>
        </NavLink>
    )
};

