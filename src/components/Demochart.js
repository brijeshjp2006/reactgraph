import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

function Demochart() {
	
	const data = [
 {
    "id": 36099,
    "run_id": 310,
    "timestamp": "2021-11-02T08:00:00Z",
    "element_id": 0.0600925,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0630925",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 36284,
    "run_id": 310,
    "timestamp": "2021-11-02T10:00:00Z",
    "element_id": 0.0699502,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0619502",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 36469,
    "run_id": 310,
    "timestamp": "2021-11-02T12:00:00Z",
    "element_id": 0.0605256,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0665256",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 36654,
    "run_id": 310,
    "timestamp": "2021-11-02T14:00:00Z",
    "element_id": 0.0702904,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0732904",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 36839,
    "run_id": 310,
    "timestamp": "2021-11-02T16:00:00Z",
    "element_id": 0.0188237,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0788237",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 37024,
    "run_id": 310,
    "timestamp": "2021-11-02T18:00:00Z",
    "element_id": 0.0898897,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0808897",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 37140,
    "run_id": 310,
    "timestamp": "2021-11-03T14:00:00Z",
    "element_id": 0.0373922,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0573922",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 37325,
    "run_id": 310,
    "timestamp": "2021-11-03T16:00:00Z",
    "element_id": 0.0265033,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0565033",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 37510,
    "run_id": 310,
    "timestamp": "2021-11-03T18:00:00Z",
    "element_id": 0.07965265,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0565265",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 37787,
    "run_id": 310,
    "timestamp": "2021-11-02T20:00:00Z",
    "element_id": 0.0187114,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0787114",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 37972,
    "run_id": 310,
    "timestamp": "2021-11-02T22:00:00Z",
    "element_id": 0.0240332,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0740332",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 38157,
    "run_id": 310,
    "timestamp": "2021-11-03T00:00:00Z",
    "element_id": 0.0508554,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0708554",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 38852,
    "run_id": 310,
    "timestamp": "2021-11-03T20:00:00Z",
    "element_id": 0.0580448,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0580448",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 39037,
    "run_id": 310,
    "timestamp": "2021-11-03T22:00:00Z",
    "element_id": 0.0603302,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0623302",
    "characteristic_unit": "mgN/L"
  },
  {
    "id": 39222,
    "run_id": 310,
    "timestamp": "2021-11-04T00:00:00Z",
    "element_id": 0.0680253,
    "asset_name": "ASP2 Effluent",
    "datalist_type": "field",
    "characteristic_name": "NH3-N",
    "characteristic_value": "0.0687253",
    "characteristic_unit": "mgN/L"
  }
  
];
   
   
    return (
    <AreaChart width={390} height={185} data={data}
  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv-1" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#24CCB8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#24CCB8" stopOpacity={0}/>
    </linearGradient>

  </defs>  <XAxis dataKey="timestamp" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  
  <Area type="monotone" dataKey="characteristic_value" stroke="#24CCB8" fillOpacity={1} fill="url(#colorUv-1)" />
  <Area type="monotone" dataKey="element_id" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv-1)" />
  

</AreaChart>
    );
}

export default Demochart; 
