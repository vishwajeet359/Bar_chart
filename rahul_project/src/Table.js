
import  React,{ useEffect,useState } from 'react';
import MaterialTable from 'material-table';

export default function DataTable() {
    const [user,setUser]=useState([])
const columns = [
  { field: 'id', title: 'ID', width: 100 },
  {field: 'manufacturer', title: 'Manufacturer'},
  {field: 'nationality',title: 'Nationality'},
  {field: 'payload_mass_kg',title: ' Payload_mass_kg'},
  {field: 'payload_mass_lbs',title: 'Payload_mass_lbs'},
  {field: 'orbit', title: 'Orbit'},
];
useEffect(()=>{
    fetch("https://api.spacex.land/graphql/",{
        method:'POST',
        headers:{
           
            'Content-Type':"application/json",
        },
        body: JSON.stringify({
            query: `
            {
                payloads {
                  id
                  manufacturer
                  nationality
                  payload_mass_kg
                  payload_mass_lbs
                  orbit
                }
              }
              `,
            variables: {
              now: new Date().toISOString(),
            },
          }),
      
        }).then((result)=>{
            result.json().then((resp)=>{
                setUser(resp.data.payloads)
                console.log(resp)
            })
  
})
},[]);
 
  return (
    <div>
        <MaterialTable title="Material table"
        data={user}
        columns={columns}
        options={{
          filtering:true

        }}
        />
    {/* <table>
        <tr>
            <th>id</th>
            <th> manufacture</th>
            <th>nationality</th>
            <th>payload_mass_kg</th>
            <th>payload_mass_lbs</th>
            <th>orbit</th>
        </tr>{
        user.map((item)=>
            <tr>
            <td>{item.id}</td>
            <td>{item.manufacture}</td>
            <td>{item.nationality}</td>
            <td>{item.payload_mass_kg}</td>
            <td>{item.payload_mass_lbs}</td>
            <td>{item.orbit}</td>
            </tr>
        )}
    </table> */}
    </div>
  );
}
