import React from 'react';

function Sidebarnav(){
	
	return(
	<>
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
</>
	)};
	
	export default Sidebarnav;