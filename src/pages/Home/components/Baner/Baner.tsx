import {BanerContainer, Title, arrowIconStyle, QuoteContainer, Quote} from './Baner.style'
import {IServiceData} from "../../../../interfaces/ServiceData"
import {JsosTile} from "../../../../components/ServiceTiles/JsosTile";
import {Loader1} from "../../../../components/Loaders/Loader1";

import {IoIosArrowDown} from 'react-icons/io'


interface BanerProps {
    jsosData: IServiceData
}

export const Baner = (props: BanerProps) => {
    return (
        <>
            <BanerContainer>
                <Title>isJSOSDown?</Title>

                {props.jsosData ? <JsosTile jsosData={props.jsosData}></JsosTile> : <Loader1/>}

                <QuoteContainer>
                    <Quote>Tutaj jakiś żarcik o JSOSie (nie cringowy)</Quote>
                </QuoteContainer>

                <IoIosArrowDown style={arrowIconStyle}/>

            </BanerContainer>
        </>
    );
}

