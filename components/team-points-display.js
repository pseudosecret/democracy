import styles from '../styles/Team-Points-Display.module.css'
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
import { Bar } from 'react-chartjs-2';

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

class TeamPointDisplay extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Bar 
                        data={{
                            labels: [''],
                            datasets: [{
                                barPercentage: 1,
                                label: "Points",
                                data: [this.props.teamPoints],
                                fill: true,
                                backgroundColor: this.props.backgroundColor,
                                borderColor: this.props.borderColor
                            }],
                            borderWidth: 3,
                        }} 
                        height={400}
                        width={80}
                        options={{  maintainAspectRatio: true,
                                    responsive: true,
                                    offset: true,
                                    plugins: {
                                        legend: {
                                            display: false
                                        }
                                    },
                                    scales: {
                                        yAxes: {
                                                beginAtZero: true,
                                                min: 0,
                                                max: this.props.maxPoints
        
                                        }
                                    }
                        }}
                    />
                </div>
            </div>
        )

    }
}

export default TeamPointDisplay