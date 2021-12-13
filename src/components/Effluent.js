
import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery"
import Effluentchart from './Effluentchart';
//import Effluentchart from './components/Effluentchart';


function Effluent(){


	return(
	<>
    <div class="grap-item">
  <div class="grap-item-head d-flex align-center justify-between">
        <h4>Effluent & Removed ammonia load</h4>
        <ul class="d-flex align-center">
      <li><a className="testuse" href="javascript:void(0);" className="current" style={{backgroundcolor:"#009fe0"}}>hourly</a></li>
      <li><a href="javascript:void(0);">daily</a></li>
    </ul>
	
      </div>
  <Effluentchart />
  <div class="grap-item-foot ">
        <ul class="d-flex flex-wrap align-center justify-center">
      <li><span style={{backgroundcolor:"#24CCB8"}}></span>
            <label>Effluent ammonia load (kg)</label>
          </li>
      <li><span style={{backgroundcolor:"#FF5660"}}></span>
            <label>Removed ammonia load (kg)</label>
          </li>
    </ul>
      </div> 
</div>
 
</>
	)};
	
	export default Effluent;