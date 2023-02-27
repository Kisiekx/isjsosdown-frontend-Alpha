import {Container, Gradient} from "./ServicesStatus.style";
import {IServiceData} from "../../../../interfaces/serviceData";
import {ServiceTile} from "../../../../components/ServiceTiles/ServiceTile";

interface ServicesContainerProps {
    services: IServiceData[]
}

export const ServicesStatus = (props: ServicesContainerProps) => {
    return (
        <>
            <Gradient>
                <Container>
                    {props.services.map((serviceData) =>
                        <ServiceTile serviceData={serviceData}/>
                    )}
                </Container>
            </Gradient>
        </>
    );
}
