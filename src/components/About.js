import React,{Component} from 'react';
import {Col,Row,Input,CardPanel} from 'react-materialize';
import '../App.css';

class About extends Component{
	constructor(props){
		super(props);
		this.state={
			firstName:'',
			lastName:'',
			email:'',
			textarea:''
		}
	}
	render(){
		return(
				<Row>
					<div className="container">
						<Col s={7}>
							<CardPanel className="white gray-text" style={{direction:"rtl",fontStyle:"italic"}}>
									<span><i className="material-icons md-24 right">location_on</i> آدرس: قم چهار راه شهدا خیابان حجتیه مجتمع آسیا طبقه ۲ پلاک ۳۲</span>
										<table className="table table-striped">
											<tbody style={{float:"right",fontStyle:"normal"}}>
												<tr>
													<td>
														<span>ارتباط مستقیم با پشتیبانی</span>
													</td>
													<td>
													</td>
													<td>
														<span> ۰۹۱۹۸۵۱۵۴۲۹ </span>
													</td>
												</tr>
												<tr>
													<td>
														<span>ارتباط مستقیم با پشتیبانی</span>
													</td>
													<td>
													</td>
													<td>
														<span> ۰۹۱۹۸۵۱۵۴۲۹ </span>
													</td>
												</tr>
												<tr>
													<td>
														<span>ارتباط مستقیم با پشتیبانی</span>
													</td>
													<td>
													</td>
													<td>
														<span> ۰۹۱۹۸۵۱۵۴۲۹ </span>
													</td>
												</tr>
										</tbody>
									</table>
							</CardPanel>
						</Col>
						<Col s={5}>
							<CardPanel className="white gray-text" style={{direction:"rtl"}}>
								<h6 style={{fontSize:"16px"}}> تماس با ایوند </h6>
								<br/>
								<hr/>
								<br/>
								<span>مهمترین عضو تیم ما شما هستید! دوست داریم پیشنهادات و انتقادات شما را بشنویم. حتما با ما در تماس باشید.</span>
								<br/>
								<br/>
								<span> اگر در ایوند حساب کاربری دارید وارد <a href="">وارد شوید</a> </span>
								<Row>
									<form>
										<Input type="text" name="firstName"  placeholder="نام" s={12} onChange = {(event,newValue) => this.setState({name:newValue})} />
										<Input type="text" name="lastName" placeholder="نام خانوادگی" s={12} onChange = {(event,newValue) => this.setState({lastName:newValue})}  />
										<Input type="email" name="email" placeholder="ایمیل" s={12} onChange = {(event,newValue) => this.setState({email:newValue})} />
										<Input type='textarea' name="textarea" placeholder="توضیحات" s={12} onChange = {(event,newValue) => this.setState({textarea:newValue})} />
										<Input type="submit" defaultValue="ارسال پیام " name="role" className=" btn  buttonColor" s={12}/>
									</form>
								</Row>
							</CardPanel>
						</Col>
					</div>
				</Row>
		);
	}
}

export default About;
/*
<div id="about">

  <h5>تیم برنامه نویسی نارون توسعه</h5>
  <p>ﺗﻮﺳﻌﻪ ﺩﻫﻨﺪﻩ اﻧﻮاﻉ ﻧﺮﻡ اﻓﺰاﺭ ﻫﺎی ﺗﺤﺖ ﻣﻮﺑﺎیﻝ ﺩﺱکﺗﺎﺏ ﻭ ﻃﺮاﺡی ﻭ اﺟﺮای ﺳﺎیﺕ ﻫﺎی ﺗﺨﺼﺺی ﺳﺎﺯﻣﺎﻥی ﻭ ﺷﺨﺺی</p>
  <h3>ﺗﻠﻔﻦ ﺗﻤﺎﺱ</h3>
  <h4>09198515429</h4>
 </div>

 */
