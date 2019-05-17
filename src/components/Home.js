import React , { Component } from 'react';

class Home extends Component{
	render(){
		return(
			<div style={{
					background:'url('+require('../pic1.jpg')+')',
					height:500,
					padding:60,
					backgroundSize:'cover'
			}}>
        <div className="caption center-align">
          <h2 style={{color:'white'}}>هر رویداد‍  یک تجربه جدید</h2>
          <h5 className="light grey-text text-lighten-3">مدرن‌ترین ابزار ثبت‌نام آنلاین و مدیریت رویداد</h5>
          <h5 className="light grey-text text-lighten-3">در حال حاضر ۱۳۷۷ رویداد در ایوند قابل ثبت‌نام هستند</h5>
        </div>
				{/*
					<div className="slider">
					<ul className="slides">
					<li>
					<img src={require('../pic1.jpg') } alt="img" />
					<div className="caption center-align">
					<h2>هر رویداد‍  یک تجربه جدید</h2>
					<h5 className="light grey-text text-lighten-3">مدرن‌ترین ابزار ثبت‌نام آنلاین و مدیریت رویداد</h5>
					<h5 className="light grey-text text-lighten-3">در حال حاضر ۱۳۷۷ رویداد در ایوند قابل ثبت‌نام هستند</h5>
					</div>
					</li>
					</ul>
					</div>
				*/}

  		</div>
			);
	}
}

export default Home;
