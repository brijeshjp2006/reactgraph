 import React from 'react';

function Topnav(){
	
	return(
	<>
    <div class="header-sec"> <span class="menu-toggle"><i class="fal fa-bars"></i></span>
  <ul class="header-menu">
        <li><a class="menu-active" href="#">Overview</a></li>
        <li><a href="#">Simulations</a></li>
        <li><a href="#">3D Fly Through</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
</div>
</>
	)};
	
	export default Topnav;