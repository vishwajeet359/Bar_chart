import React from 'react'
import { Bar } from 'react-chartjs-2'
function BarChart() {

    const data = {
        labels: ['Test Case1', 'Test Case2', 'Test Case3', 'Test Case4', 'Test Case5'],
        datasets: [
            {
                label: 'PASS ',
                data: [20, 30, 16, 25, 45],
                borderColor: ['black'],
                borderWidth: 2,
                backgroundColor: ['green'],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
                pointBorderColor: 'rgba(255,206,86,0.2)',

            },
            {
                label: 'FAIL',
                data: [25, 15, 30, 25, 38],
                backgroundColor: ['red'],
                borderColor: ['balck'],
                borderWidth: 2,

            },
            {
                label: 'Unknown',
                data: [2, 5, 3, 4, 5],
                borderColor: ['black'],
                borderWidth: 2,
            }
        ]
    }
    async function getDummyData() {
        const apiUrl = "http://localhost:3000/testcases"

        const response = await fetch(apiUrl)
        const TestCase = await response.json()
        console.log(TestCase)
        return TestCase;
    }
    getDummyData()

    //    const option ={
    //         title : {
    //             display:true,
    //             text:'Bar Chart'
    //         },
    //         scales:{
    //             y:[
    //                 {
    //                     ticks:{
    //                         min:0,
    //                         max:100,
    //                         stepSize:10,
    //                     }
    //                 }
    //             ]
    //         }
    //     }
    return (
        <div>
            <Bar data={data}
                options={{
                    responsive:true,
                    title: {
                        display: true,
                        text: "barchart"
                    }, scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero:true,
                                    maxTicksLimit: 100,
                                    stepSize:1,
                                }
                            }
                        ]
                    }
                }}

            />
        </div>
    )

}

export default BarChart;
