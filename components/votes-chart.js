import styles from '../styles/Votes-Chart.module.css'
import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
)

class VotesChart extends React.Component {
    render() {
        return (
            <div className={styles.wider}>
                <Doughnut 
                    data={{
                        labels: ["Rock", "Paper", "Scissors"],
                        datasets: [{
                            label: "# of Votes",
                            data: [52, 11, 26],
                            fill: true,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(45, 192, 152, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(45, 192, 152, 1)',
                            ]
                        }],
                        borderWidth: 6,
                    }} 
                    height={300}
                    width={300}
                    options={{  maintainAspectRatio: true,
                                responsive: true,
                                offset: true,
                    }}
                />
            </div>
        )

    }
}

export default VotesChart