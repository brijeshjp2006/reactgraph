import React, { Component } from 'react'
import $ from 'jquery'
import Leftheader from './Leftheader';
import Topnav from './Topnav';
import Sidebarnav from './Sidebarnav';
import Combined from './components/Combined';
import Effluent from './components/Effluent';
import Solids from './components/Solids';
import Ammonia from './components/Ammonia';
import Bod from './components/Bod';
import './assets/css/style.css';
import './assets/css/custom.css';
//import './assets/js/main.js';

export default class App extends Component {
  jQuerycode = () => {
    $(".current").click(function(){
     alert('test');
    
    });
  }
  componentDidMount(){
    this.jQuerycode()
  }
  render() {
    return (
      <>
       <div class="main-outer">
    <Leftheader />
	<div class="main-content-sec">
	<Topnav />
	 <div class="content-dis-main">
	<span class="left-menu-toggle"><i class="far fa-chevron-double-right"></i></span>
	<Sidebarnav />
	<div class="page-content-area scroll-bar">
	<Combined />
	<div class="grap-main-row d-flex flex-wrap">
	<Effluent />
	<Solids />
	<Ammonia />
	<Bod />
	</div>
	</div>
	</div>
	
	</div>
	
	</div>
      </>
    )
  }
}