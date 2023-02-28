import {Container, Gradient} from "./ServicesStatus.style";
import {IServiceData} from "../../../../interfaces/ServiceData";
import {ServiceTile} from "../../../../components/ServiceTiles/ServiceTile";
import { ServiceTileWithRoute } from "../../../../components/RouteWrappers/ServiceTileWithRoute";

interface ServicesContainerProps {
    services: IServiceData[]
}

export const ServicesStatus = (props: ServicesContainerProps) => {
    return (
        <>
            <Gradient>
                <Container>
                    {props.services.map((serviceData) =>
                        <ServiceTileWithRoute serviceData={serviceData}/>
                    )}
                </Container>
            </Gradient>
        </>
    );
}
