import {Chart} from "react-chartjs-2"
import { useAvailabilityChartLogic } from "./useAvailabilityChartLogic"
import { useEffect } from "react";


export const AvailabilityChart = (props:any) =>{

    const {data,options}= useAvailabilityChartLogic(props);

    

    return <Chart type="line" data={data} options={options} />
    

}
