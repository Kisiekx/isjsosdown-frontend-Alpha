import {BanerContainer, Title} from './Baner.style'
import {serviceData} from "../../../../interfaces/serviceData"
import { JsosTile } from "../../../../components/ServiceTiles/JsosTile";
import {Loader1} from "../../../../components/Loaders/Loader1";

interface BanerProps {
    jsosData: serviceData
}

export const Baner = (props: BanerProps) => {
    return (
        <>
            <BanerContainer>
                <Title>isJSOSDown?</Title>

                {props.jsosData ? <JsosTile jsosData={props.jsosData}></JsosTile> : <Loader1/>}



            </BanerContainer>
        </>
    );
}

