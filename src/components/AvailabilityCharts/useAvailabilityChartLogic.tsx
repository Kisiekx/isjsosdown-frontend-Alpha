import { useEffect,useState } from 'react';
import 'chartjs-adapter-moment';
import { _DeepPartialObject } from 'chart.js/types/utils';


import {Chart as ChartJS, CategoryScale, LinearScale, PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    TooltipItem,
    PluginChartOptions,
    DatasetChartOptions,
    CoreChartOptions,
    ElementChartOptions,
    AnimationSpec,
    ChartType,
    LogarithmicScale} from 'chart.js'
import { DownTime } from '../../types/main.types';
import { globalColors } from '../../assets/globalStyleVariables';
import { isDownTimeType } from '../../lib/typeGuards';

const ANIMATION_DURATION = 800

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    LogarithmicScale
  );
export const useAvailabilityChartLogic = (props:{downtimes:DownTime[]}) =>{

    const [labels,setLabels] = useState<number[]>([])
    const [args, setArgs] = useState<number[]>([])

    useEffect(()=>{
        const flattenedData = (flattedData(props.downtimes));
       
        const dataValues = flattenedData.map(({val})=>val);
        const dataLabels = flattenedData.map(({arg})=>arg);
        setArgs(dataValues);
        setLabels(dataLabels);
        
        console.log("STATE updated")
        
    },[props])
    

    return {
      data: createDataObject(
        args,
        labels,
        args[args.length - 1] === 1
          ? globalColors.brightGreen
          : globalColors.brightRed
      ),
      options: createOptionsObject(labels.length, ANIMATION_DURATION),
    };
}





const data = [

    {
        downSince: Date.now()-600000,
        downTill: Date.now()-500000
    },{
        downSince: Date.now()-400000,
        downTill: Date.now()-300000
    },{
        downSince: Date.now()-230000,
        downTill: Date.now()-200000
    },{
        downSince: Date.now()-150000,
        downTill: Date.now()-100000
    }
    
]
type FormatedData = {
    arg: number,
    val: number
}

const flattedData = (data: (DownTime|{downSince:number}|{downTill:number})[]):FormatedData[] => {
  
   if(!data){
      return []
   }else{
    return  data.reduce((accum:FormatedData[], current)=>{

      if("downSince" in current){
        accum.push(getFormatedDateObject(current.downSince,1))
        accum.push(getFormatedDateObject(current.downSince,0))
      }
      if("downTill" in current){
        accum.push(getFormatedDateObject(current.downTill,0))
        accum.push(getFormatedDateObject(current.downTill,1))
      }
;

      return accum
  },[])
   }
   

}

const getProgressiveAnimation = (dataLength:number, Totalduration: number) => {


  const delayBetweenPoints = Totalduration / dataLength;
  const previousY = (ctx: any) =>
    ctx.index === 0
      ? ctx.chart.scales.y.getPixelForValue(100)
      : ctx.chart
          .getDatasetMeta(ctx.datasetIndex)
          .data[ctx.index - 1].getProps(["y"], true).y;
  return {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN, // the point is initially skipped
      delay(ctx: any) {
        if (ctx.type !== "data" || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: previousY,
      delay(ctx: any) {
        if (ctx.type !== "data" || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  } as AnimationSpec<ChartType>;
};
const createDataObject = (args:number[],labels:number[],color:string) =>{
  return {labels, datasets:[{label:"",data:args, borderColor:color}]}
}
const createOptionsObject = (dataLength:number, animationDuration:number) =>{
  
 return {
  responsive:true,
  maintainAspectRatio:false,
  resizeDelay:1,
  animation: getProgressiveAnimation(dataLength,animationDuration),
  transitions: {
    show: {
      animations: {
        x: {
          from: 0
        },
        y: {
          from: 0
        }
      }
    }},
  scales: {  
    
    y: {
      ticks: {
        display:false,
        color:"white"
      },
      grid:{
        display:false
      }
    },
    x: {
      type: "time",
      ticks: {
        display:false
      },
      grid:{
        display:false
      }
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: function(context:TooltipItem<"line">) {
          if (context.parsed.y === 1) {
            return "Dostepny";
          } else {
            return "Niedostepny";
          }
        },
        labelColor: function(context:TooltipItem<"line">) {
          const color = context.parsed.y === 1 ? "green" : "red";

          return {
            borderColor: "rgb(0,0,0,0)",
            backgroundColor: color,
            borderWidth: 2,
            borderDash: [2, 2] as [number,number],
            borderRadius: 2,
          };
        },
      },
    },
  },
} as _DeepPartialObject<CoreChartOptions<"line"> & ElementChartOptions<"line"> & PluginChartOptions<"line"> & DatasetChartOptions<"line">>

}

const getFormatedDateObject = (argument:number, value:1|0):FormatedData=>{
    return {
      arg:argument,
      val:value
    }

}

/*
(<Position>
            <Chart type={'line'} ref={chartRef} style={{backgroundColor:"rgba(0,0,0,0)"}} 
            options={{scales:{yAxis:{display:false},
                y:{ticks: {
                callback: function(value, index,ticks){
                    if(value===1){
                        return "Dostępny"
                    }else if(value==0){
                        return "Niedostępny"
                    }
                }
            }
        }, x:{type:"time", ticks:{
                autoSkip:true,
                maxRotation:60,
                minRotation:60
            },time:{unit:"minute", displayFormats:{
                minute:"DD MMMM HH:mm"
            }}}}, plugins:{legend:{display:false}, tooltip:{
                callbacks:{
                    label: function(context){
                        
                        if(context.parsed.y==1){
                            return "Dostepny"
                        }else{
                            return "Niedostepny"
                        }
                    },
                    labelColor: function(context){

                        const color = context.parsed.y==1?"green":"red"

                        return {
                            borderColor: "rgb(0,0,0,0)",
                            backgroundColor: color,
                            borderWidth: 2,
                            borderDash: [2, 2],
                            borderRadius: 2,
                    }
                    }
                }
            }}}}
            data={{labels, datasets:[{label:"",data:args, borderColor:grad, yAxisID:"yAxis"}]}} />
            </Position>)
*/