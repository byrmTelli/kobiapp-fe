import { ApexProgressChartProps } from "./types";
import Chart from "react-apexcharts";

export default function ApexProgressChart({
  ...props
}: ApexProgressChartProps) {
  return (
    <Chart
      options={props.options}
      series={props.series}
      type={props.type}
      width={props.width}
      height={props.height}
    />
  );
}
