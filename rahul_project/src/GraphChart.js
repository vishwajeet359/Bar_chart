import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import "chartjs-plugin-datalabels"
 
function GraphChart()
{
  const[graph,setGraph]=useState([]);
   
  const[getdata,setGetData]=useState([]);
 
 
  const personDetail = async () => {
    axios.get("http://localhost:3000/testcases")
    
     .then(response => {
        setGetData(response.data);
     });
     
   }
   useEffect(() => {
    personDetail();
  }, []);
  const selectChart = (e) =>
  {   
    axios.get(`http://localhost:3000/testcases`)
     .then(res => {
      const personData = res.data;
      let testName=[];
      let passCase = [];
      let failCase = [];
      let unknownCase =[];
      personData.forEach(element => {
        testName.push(element.name);
        passCase.push(element.passtestcase);
        failCase.push(element.failtestcase);
        unknownCase.push(element.unknowntestcase)
       });
        setGraph({
            labels: testName,
            datasets: [
              {
                label: 'Pass',
               hoverBackgroundColor:[
                    'green',
                 ],
                 
                borderWidth:2,
               borderColor:['dark-green'],
                data:passCase
              },
              {
                label: 'Fail',
                hoverBackgroundColor:[
                    'rgba(255, 0, 0, 0.6)',
                 ],
                borderWidth:2,
                borderColor:['rgba(255, 0, 0, 0.8)'],
                data:failCase
              },
              {
                label: 'Unknown',
                hoverBackgroundColor:[
                    'yellow',
                 ],
                borderWidth:2,
                borderColor:['gray'],
                data:unknownCase
              }
             ]
        });
      });
      
  }
  useEffect(() => {
    selectChart();
  }, []);
   
  return(
     <div className="container">
        <h4 className="text-center text-primary mt-2 mb-3">Bar Chart</h4> 
        <h6 className="text-center text-success mt-2 mb-3">Person Name TestCase</h6> 
        <div className="row mt-3">
           <div className="col-sm-3">
            
              <div className=""> 
               <table class=" table-bordered graphTable ">
                
                <tr>
                    <th>Name</th>
                    <th>Pass</th>
                    <th>Fail</th>
                    <th>Unknown</th>
                </tr> 
                  { getdata.map((name)=>
                    <tr>
                      <td>{name.name}</td>
                      <td>{name.passtestcase}</td>
                      <td>{name.failtestcase}</td>
                      <td>{name.unknowntestcase}</td>
                    </tr>                  
                 )}   
               </table>     
             </div>
           </div>     
           <div className="col-sm-9">
           <Bar
             data={graph}
                options={{
                    title:{
                      display:true,
                      text:'Test Case',
                      fontSize:20
                    },
                    legend:{
                      display:true,
                      position:'right',
                    },
                    plugins: {
                        datalabels: {
                           display: true,
                           color: 'white'
                        }
                     },
                     plotOptions: {
                        series: {
                            cursor: 'pointer',
                            point: {
                                events: {
                                    click: () => {
                                      alert("Clicked!");
                                    }
                                }
                            }
                        }
                      }
                    
                }}
                />
            </div>
             
        </div>     
     </div>    
    )
}
export default GraphChart;
