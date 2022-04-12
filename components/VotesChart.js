import styles from '../styles/VotesChart.module.css'
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
        const data = [this.props.rockVotes, this.props.paperVotes, this.props.scissorsVotes]

        return (
            <div className={styles.centered}>
                <Doughnut 
                    
                    data={{
                        labels: ["Rock", "Paper", "Scissors"],
                        datasets: [{
                            label: "# of Votes",
                            data: data,
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
                    height={100}
                    width={100}
                    options={{  maintainAspectRatio: true,
                                responsive: true,
                                offset: false,
                    }}
                />
            </div>
        )

    }
}

export default VotesChart