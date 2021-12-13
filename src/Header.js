import React from 'react';

function Header(){
	
	return(
	<>
	   
    
  
  <div class="left-bar">
    <div class="logo-sec"> <a href="#"> <img src={process.env.PUBLIC_URL + "assets/images/logo.svg"} alt="" /> </a> </div>
    <div class="site-title">BECKTON DIGITAL TWIN</div>
    <div class="left-bottom-links"> <a href="#"><img src={process.env.PUBLIC_URL + "assets/images/user-icon.svg"} alt="" /></a> 
	<a href="#"><img src={process.env.PUBLIC_URL + "assets/images/question-icon.svg"} alt="" /></a> </div>
  </div>
 
  <div class="main-content-sec">
    <div class="header-sec">
		<span class="menu-toggle"><i class="fal fa-bars"></i></span>
      <ul class="header-menu">
        <li><a class="menu-active" href="#">Overview</a></li>
        <li><a href="#">Simulations</a></li>
        <li><a href="#">3D Fly Through</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
    </div>
    <div class="content-dis-main">
	<span class="left-menu-toggle"><i class="far fa-chevron-double-right"></i></span>
      <div class="overview-left-sec scroll-bar">
        <div class="assets-search-sec">
          <h1>Asset List</h1>
          <form>
            <div class="form-field search-field">
				<input type="text" class="form-control" placeholder="Search Assets" />
			</div>
            <div class="form-field">
				<label>Select Category</label>
              <select>
                <option>All</option>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
              </select>
            </div>
          </form>
        </div>
        <div class="left-menu-sec">
			<h4><i class="fas fa-caret-down"></i> Aeration</h4>
			<ul class="aeration-sidebar-menu">
				<li><a href="javascript:void(0);">ASP 2 Lane 9</a></li>
				<li><a href="javascript:void(0);">ASP 2 Lane 10</a></li>
				<li><a href="javascript:void(0);">ASP 2 Lane 11</a></li>
				<li><a href="javascript:void(0);">ASP 2 Lane 12</a></li>
				<li><a href="javascript:void(0);">ASP 2 Lane 13</a></li>
				<li><a href="javascript:void(0);">ASP 2 Lane 14</a></li>
				<li><a href="javascript:void(0);">ASP 2 Blowers</a></li>
			</ul>
			<h4><i class="fas fa-caret-down"></i> Final Settlement</h4>
			<ul class="fst-sidebar-menu">
				<li><a href="javascript:void(0);">FST 49</a></li>
				<li><a href="javascript:void(0);">FST 50</a></li>
				<li><a href="javascript:void(0);">FST 51</a></li>
				<li><a href="javascript:void(0);" class="active">FST 52</a></li>
				<li><a href="javascript:void(0);">FST 53</a></li>
				<li><a href="javascript:void(0);">FST 54</a></li>
				<li><a href="javascript:void(0);">FST 55</a></li>
				<li><a href="javascript:void(0);">FST 56</a></li>
				<li><a href="javascript:void(0);">FST 57</a></li>
				<li><a href="javascript:void(0);">FST 58</a></li>
				<li><a href="javascript:void(0);">FST 59</a></li>
			</ul>
        </div>
      </div>
      
    </div>
  </div>

				   
	</>
	)};
	
	export default Header;