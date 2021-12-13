import React from 'react';
import Demochart2 from './Demochart2';

function Ammonia(){
	
	return(
	<>
    <div class="grap-item">
  <div class="grap-item-head d-flex align-center justify-between">
        <h4>Ammonia</h4>
        <ul class="d-flex align-center">
      <li><a href="javascript:void(0);" class="current" style={{backgroundcolor:"#FFB800"}}>hourly</a></li>
      <li><a href="javascript:void(0);">daily</a></li>
    </ul>
      </div>
 
  <Demochart2 />
  <div class="grap-item-foot">
        <ul class="d-flex flex-wrap align-center justify-center">
      <li><span style={{backgroundcolor:"#FFB800"}}></span>
            <label>Ammonia (mg/l)</label>
          </li>
    </ul>
      </div>
</div>
</>
	)};
	
	export default Ammonia;