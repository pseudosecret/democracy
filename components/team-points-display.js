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
                <Bar 
                    data={{
                        labels: [this.props.teamName],
                        datasets: [{
                            barPercentage: 1,
                            label: "Points",
                            data: [this.props.teamPoints],
                            fill: true,
                            backgroundColor: this.props.backgroundColor,
                            borderColor: this.props.borderColor
                        }],
                        borderWidth: 3,
                        legend: {
                            display: true,
                            labels: {
                                boxWidth: 50,
                                fontSize: 10,
                                fontColor: '#00FF00',
                                padding: 5,
                            }
                        }
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
                                            max: 100
    
                                    }
                                }
                    }}
                />
            </div>
        )

    }
}

export default TeamPointDisplay