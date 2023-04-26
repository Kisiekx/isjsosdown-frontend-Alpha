import { useEffect, useState } from 'react';
import 'chartjs-adapter-moment';
import { _DeepPartialObject } from 'chart.js/types/utils';
import { DownTime } from '../../types/main.types';
import { globalColors } from '../../assets/globalStyleVariables';
import { FormatedChartData } from "../../types/chart.types";

import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement,
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
  LogarithmicScale
} from 'chart.js'



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

const ANIMATION_DURATION = 700

export const useAvailabilityChartLogic = (props: { downtimes: DownTime[] }) => {

  const [labels, setLabels] = useState<number[]>([])
  const [args, setArgs] = useState<number[]>([])

  useEffect(() => {
    const flattenedData = (flattedData(props.downtimes));

    const dataValues = flattenedData.map(({ val }) => val);
    const dataLabels = flattenedData.map(({ arg }) => arg);
    setArgs(dataValues);
    setLabels(dataLabels);

    console.log("STATE updated")

  }, [props])


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


const flattedData = (data: (DownTime | { downSince: number } | { downTill: number })[]): FormatedChartData[] => {

  if (!data) {
    return []
  } else {
    return data.reduce((accum: FormatedChartData[], current) => {

      if ("downSince" in current) {
        accum.push(getFormatedDateObject(current.downSince, 1))
        accum.push(getFormatedDateObject(current.downSince, 0))
      }
      if ("downTill" in current) {
        accum.push(getFormatedDateObject(current.downTill, 0))
        accum.push(getFormatedDateObject(current.downTill, 1))
      }
      ;

      return accum
    }, [])
  }


}

const getFormatedDateObject = (argument: number, value: 1 | 0): FormatedChartData => {
  return {
    arg: argument,
    val: value
  }
}

const createDataObject = (args: number[], labels: number[], color: string) => {
  return { labels, datasets: [{ label: "", data: args, borderColor: color }] }
}



const createOptionsObject = (dataLength: number, animationDuration: number) => {

  return {
    responsive: true,
    maintainAspectRatio: false,
    resizeDelay: 1,
    animation: getProgressiveAnimation(dataLength, animationDuration),
    scales: {

      y: getTicksObject(false, false),
      x: {
        type: "time",
        ...getTicksObject(false, false)
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: getAvailabilityLabelText("Dostępny", "Niedostępny"),
          labelColor: getAvailabilityLabelColor(globalColors.brightGreen, globalColors.brightRed),
        },
      },
    },
  } as _DeepPartialObject<CoreChartOptions<"line"> & ElementChartOptions<"line"> & PluginChartOptions<"line"> & DatasetChartOptions<"line">>

}

const getTicksObject = (
  displayTick: boolean,
  displayGrid: boolean,
  color?: string
) => {
  return {
    ticks: {
      display: displayTick,
      color: color,
    },
    grid: {
      display: displayGrid,
    },
  };
};

const getAvailabilityLabelText =
  (labelWhenOn: string, labelWhenOff: string) => (context: TooltipItem<"line">) => {
    if (context.parsed.y === 1) {
      return labelWhenOn;
    } else {
      return labelWhenOff;
    }
  };
const getAvailabilityLabelColor =
  (colorWhenOn: string, colorWhenOff: string) => (context: TooltipItem<"line">) => {
    const color =
      context.parsed.y === 1
        ? colorWhenOn
        : colorWhenOff;

    return {
      borderColor: "rgb(0,0,0,0)",
      backgroundColor: color,
    };
  };


const getProgressiveAnimation = (dataLength: number, Totalduration: number) => {

  const delayBetweenPoints = Totalduration / dataLength;

  return {
    x: getAxisAnimation("number", "linear", delayBetweenPoints, NaN),
    y: getAxisAnimation("number", "linear", delayBetweenPoints, previousY)
  } as AnimationSpec<ChartType>;
};

const getAxisAnimation = (type: string, easing: string, duration: number, from: any) => {
  return {
    type: type,
    easing: easing,
    duration: duration,
    from: from, // the point is initially skipped
    delay(ctx: any) {
      if (ctx.type !== "data" || ctx.xStarted) {
        return 0;
      }
      ctx.xStarted = true;
      return ctx.index * duration;
    },
  }
}

const previousY = (ctx: any) =>
  ctx.index === 0
    ? ctx.chart.scales.y.getPixelForValue(100)
    : ctx.chart
      .getDatasetMeta(ctx.datasetIndex)
      .data[ctx.index - 1].getProps(["y"], true).y;