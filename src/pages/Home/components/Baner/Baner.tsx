import {BanerContainer} from './Baner.style'
import {serviceData} from "../../Home";


interface BanerProps {
    jsosData: serviceData
}

export const Baner = (props: BanerProps) => {
    return (
        <>
            <BanerContainer>
                {props.jsosData.name}
            </BanerContainer>
        </>
    );
}

