import React from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

function Demochart2() {
	
	const data = [
 {
    "id": 35827,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 4000,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "Blanket",
    "characteristic_value": "2400",
    "characteristic_unit": "m"
  },
  {
    "id": 35828,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3000,
    "asset_name": "STG2 FST  d51-60",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "1398",
    "characteristic_unit": "g"
  },
  {
    "id": 35829,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2000,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "1800",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35830,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2780,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "3908",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35831,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1890,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "3800",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35832,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2390,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "VSS",
    "characteristic_value": "3800",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35833,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3490,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "2300",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35834,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 4000,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "2400",
    "characteristic_unit": "g"
  },
  {
    "id": 35835,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2400,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "3000",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35836,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3000,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "3000",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35837,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2600,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "2790.9",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35838,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1200,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "VSS",
    "characteristic_value": "931",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35839,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1300,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "1115",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35840,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1005,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3000",
    "characteristic_unit": "g"
  },
  {
    "id": 35841,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2005,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "2609",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35842,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2890,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "1720",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35843,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1450,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "2780",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35844,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2074,
    "asset_name": "ASP2 AL9 feed",
    "datalist_type": "field",
    "characteristic_name": "Flow",
    "characteristic_value": "3040",
    "characteristic_unit": "m3/d"
  },
  {
    "id": 35845,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2074,
    "asset_name": "ASP2 AL9 feed",
    "datalist_type": "field",
    "characteristic_name": "Side Flow",
    "characteristic_value": "3500",
    "characteristic_unit": "Side m3/d"
  },
  {
    "id": 35846,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2084,
    "asset_name": "ASP2 AL10 feed",
    "datalist_type": "field",
    "characteristic_name": "Flow",
    "characteristic_value": "1900",
    "characteristic_unit": "m3/d"
  },
  {
    "id": 35847,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2184,
    "asset_name": "ASP2 AL10 feed",
    "datalist_type": "field",
    "characteristic_name": "Side Flow",
    "characteristic_value": "1374",
    "characteristic_unit": "Side m3/d"
  },
  {
    "id": 35848,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3085,
    "asset_name": "STG2 - L10_Pass1",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3200",
    "characteristic_unit": "g"
  },
  {
    "id": 35849,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2846,
    "asset_name": "STG2 - L10_Pass2",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3445",
    "characteristic_unit": "g"
  },
  {
    "id": 35850,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3256,
    "asset_name": "STG2 - L10_Pass 3&4",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "1324",
    "characteristic_unit": "g"
  },
  {
    "id": 35851,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3215,
    "asset_name": "STG2 -L10_Pass5&6",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "2344",
    "characteristic_unit": "g"
  },
  {
    "id": 35852,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2390,
    "asset_name": "STG2 - L10_Pass7&8",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "3418",
    "characteristic_unit": "mg/L"
  }
  
];
   
   const data2 = [
 {
    "id": 35827,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3000,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "Blanket",
    "characteristic_value": "2400",
    "characteristic_unit": "m"
  },
  {
    "id": 35828,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2000,
    "asset_name": "STG2 FST  d51-60",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "1398",
    "characteristic_unit": "g"
  },
  {
    "id": 35829,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1000,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "1800",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35830,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1780,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "3908",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35831,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2890,
    "asset_name": "STG2 FST 51-60",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "3800",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35832,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1390,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "VSS",
    "characteristic_value": "3800",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35833,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1490,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "2300",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35834,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1000,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "2400",
    "characteristic_unit": "g"
  },
  {
    "id": 35835,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1400,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "3000",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35836,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3000,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "3000",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35837,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1600,
    "asset_name": "North PST",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "2790.9",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35838,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2000,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "VSS",
    "characteristic_value": "931",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35839,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 3000,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "1115",
    "characteristic_unit": "mg/L"
  },
  {
    "id": 35840,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 500,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3000",
    "characteristic_unit": "g"
  },
  {
    "id": 35841,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2005,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "SOR",
    "characteristic_value": "2609",
    "characteristic_unit": "m3/(m2 d)"
  },
  {
    "id": 35842,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2890,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "SLR",
    "characteristic_value": "1720",
    "characteristic_unit": "kg/(m2 d)"
  },
  {
    "id": 35843,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2450,
    "asset_name": "South PST",
    "datalist_type": "field",
    "characteristic_name": "Underflow TSS",
    "characteristic_value": "2780",
    "characteristic_unit": "Underflow mg/L"
  },
  {
    "id": 35844,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2074,
    "asset_name": "ASP2 AL9 feed",
    "datalist_type": "field",
    "characteristic_name": "Flow",
    "characteristic_value": "3040",
    "characteristic_unit": "m3/d"
  },
  {
    "id": 35845,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1740,
    "asset_name": "ASP2 AL9 feed",
    "datalist_type": "field",
    "characteristic_name": "Side Flow",
    "characteristic_value": "3500",
    "characteristic_unit": "Side m3/d"
  },
  {
    "id": 35846,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1084,
    "asset_name": "ASP2 AL10 feed",
    "datalist_type": "field",
    "characteristic_name": "Flow",
    "characteristic_value": "1900",
    "characteristic_unit": "m3/d"
  },
  {
    "id": 35847,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1841,
    "asset_name": "ASP2 AL10 feed",
    "datalist_type": "field",
    "characteristic_name": "Side Flow",
    "characteristic_value": "1374",
    "characteristic_unit": "Side m3/d"
  },
  {
    "id": 35848,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1085,
    "asset_name": "STG2 - L10_Pass1",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3200",
    "characteristic_unit": "g"
  },
  {
    "id": 35849,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1846,
    "asset_name": "STG2 - L10_Pass2",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "3445",
    "characteristic_unit": "g"
  },
  {
    "id": 35850,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2560,
    "asset_name": "STG2 - L10_Pass 3&4",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "1324",
    "characteristic_unit": "g"
  },
  {
    "id": 35851,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 2150,
    "asset_name": "STG2 -L10_Pass5&6",
    "datalist_type": "field",
    "characteristic_name": "MassTSS",
    "characteristic_value": "2344",
    "characteristic_unit": "g"
  },
  {
    "id": 35852,
    "run_id": 310,
    "timestamp": "2021-11-03T12:00:00Z",
    "element_id": 1390,
    "asset_name": "STG2 - L10_Pass7&8",
    "datalist_type": "field",
    "characteristic_name": "TSS",
    "characteristic_value": "3418",
    "characteristic_unit": "mg/L"
  }
  
];
   
    return (
    <AreaChart width={390} height={185} data={data}
  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv-2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#24CCB8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#24CCB8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv-2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FF5660" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FF5660" stopOpacity={0}/>
    </linearGradient>
  </defs>  <XAxis dataKey="timestamp" />
  <YAxis/>
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="element_id" stroke="#24CCB8" fillOpacity={1} fill="url(#colorUv-2)" />
  <Area data={data} type="monotone" dataKey="characteristic_name" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv-2)" />
 
  
/* 
  <Area type="monotone" dataKey="run_id" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv-1)" />
  <Area type="monotone" dataKey="asset_name" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv-1)" />
  <Area type="monotone" dataKey="characteristic_name" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv-1)" />
  <Area type="monotone" dataKey="characteristic_unit" stroke="#FF5660" fillOpacity={1} fill="url(#colorPv-1)" />*/
</AreaChart>
    );
}

export default Demochart2; 
