import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

function Effluentchart() {
	
	const data = [
 {
    "id": 35827,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 208,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "Blanket",
    "characteristic_value": "0.537438",
    "characteristic_unit": "m"
  },
  {
    "id": 35828,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 208,
    "asset_name": "STG2 FST  d51-60",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3.48392",
    "characteristic_unit": "g"
  },
  {
    "id": 35829,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 208,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "14.6056",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35830,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 208,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "94.8821",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35831,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 208,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "7320.62",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35832,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 104,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "VSS",
    "characteristic_value": "92.6745",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35833,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 54,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "110.965",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35834,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 84,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3.370",
    "characteristic_unit": "g"
  },
  {
    "id": 35835,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 4,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "26.7539",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35836,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 94,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "5.84713",
    "characteristic_unit": "kg/(m2 d)"
  }
  
];
   
   
    return (
    <AreaChart width={390} height={185} data={data}
  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#000" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#000" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FF5660" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FF5660" stopOpacity={0}/>
    </linearGradient>
  </defs>  <XAxis dataKey="element_id" />
  <YAxis dataKey="characteristic_value" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="element_id" stroke="#000" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="characteristic_value" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv)" />
/*  <Area type="monotone" dataKey="id" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="run_id" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="asset_name" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="characteristic_name" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="characteristic_unit" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv)" />*/
</AreaChart>
    );
}

export default Effluentchart; 
