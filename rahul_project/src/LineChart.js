import React from 'react'
import {Line } from 'react-chartjs-2'
function LineChart() {
    const data = {
        labels:['GTO','LEO','ISS','PO','IAS','HCO'],
        datasets:[
            {
                label:'Mass_kg ',
                data:[3,2,2,1,5,3],
                borderColor:['rgba(255,206,86,0.2)'],
                backgroundColor:['rgba(255,206,86,0.2)'],
                pointBackgroundColor:'rgba(255,206,86,0.2)',
                pointBorderColor:'rgba(255,206,86,0.2)'
            },
            {
                label:'Mass_lbs',
                data:[8,5,9,2,9,2]
            }
        ]
    }
    return (
        <div>
          <Line data={data}/>  
        </div>
    )
}

export default LineChart;
