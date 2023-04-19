import {Chart} from "react-chartjs-2"
import { useAvailabilityChartLogic } from "./useAvailabilityChartLogic"
import { useEffect } from "react";
import { LinearChart } from "./AvailabilityChart.style";


export const AvailabilityChart = (props:any) =>{

    const {data,options}= useAvailabilityChartLogic(props);

    

    return <LinearChart type="line" data={data} options={options} />
    

}
