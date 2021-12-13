import React from 'react';
import Demochart from './Demochart';

function Solids(){
	
	return(
	<>
    <div class="grap-item">
  <div class="grap-item-head d-flex align-center justify-between">
        <h4>Solids</h4>
        <ul class="d-flex align-center ">
      <li><a href="javascript:void(0);" class="current" style={{backgroundcolor:"#9933FF"}}>hourly</a></li>
      <li><a href="javascript:void(0);">daily</a></li>
    </ul>
      </div>
<Demochart />
  <div class="grap-item-foot ">
        <ul class="d-flex flex-wrap align-center justify-center">
      <li><span style={{backgroundcolor:"#9933FF"}}></span>
            <label>Solids (mg/l)</label>
          </li>
    </ul>
      </div>
</div>
</>
	)};
	
	export default Solids;