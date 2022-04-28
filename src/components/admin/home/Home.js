import React from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { data, options } from "./graphData";
import { ChartContainer } from "./styledComponents/ChartContainer";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function Home() {
  return (
    <ChartContainer>
      <Bar options={options} data={data} />
    </ChartContainer>
  );
}

export { Home };
