import React from 'react';

function Leftheader(){
	
	return(
	<>
    <div class="left-bar">
  <div class="logo-sec"> <a href="#"> <img src={process.env.PUBLIC_URL + "assets/images/logo.svg"} alt="" /> </a> </div>
  <div class="site-title">BECKTON DIGITAL TWIN</div>
  <div class="left-bottom-links"> <a href="#"><img src={process.env.PUBLIC_URL + "assets/images/user-icon.svg"} alt="" /></a> <a href="#"><img src={process.env.PUBLIC_URL + "assets/images/question-icon.svg"} alt="" /></a> </div>
</div>
</>
	)};
	
	export default Leftheader;