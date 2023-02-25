import { Container } from "./ServicesStatus.style";
import {IServiceData} from "../../../../interfaces/serviceData";
import {ServiceTile} from "../../../../components/ServiceTiles/ServiceTile";

interface ServicesContainerProps{
    services: IServiceData[]
}

export const ServicesStatus = (props: ServicesContainerProps) => {
    return (
        <>
            <Container>
                {props.services.map((serviceData)=>
                    <ServiceTile serviceData={serviceData}/>
                )}
            </Container>
        </>
    );
}
