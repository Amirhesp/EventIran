import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {registerAction} from './../redux/actions/actions'
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Input} from 'react-materialize';


function Transition(props) {
  return <Slide direction="left" {...props} />;
}
class Register extends Component {

	constructor(props){
	super(props);
		this.state={
			firstname:'',
			lastname:'',
			email:'',
			password:''
		}
	}
  registerSubmit = ()=>{
    this.props.registerAction(this.state.firstname , this.state.lastname , this.state.email , this.state.password);
    console.log(this.props.registerdata);
  }
	render() {
		return (
			<Dialog
				style={{direction:'rtl'}}
          open={this.props.openRegister}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
					<DialogTitle id="alert-dialog-slide-title">
						عضویت
					</DialogTitle>
					<DialogContent  style={{minWidth:320,overflowX:'hidden'}}>
		      	<form method="post">
	        	  <Input
                label= "نام"
			          type="text"
			          name='firstname'
			          id="firstname"
							  onChange = {(event,newValue) => this.setState({firstname:newValue})}
			        />
		        <Input
							type="text"
              label="نام خانوادگی"
							name='lastname'
							id='lastname'
							onChange = {(event,newValue) => this.setState({lastname:newValue})}
						/>
						<Input className='validate'
              label="ایمیل "
							type='email'
							name='email'
							id='email'
							onChange = {(event,newValue) => this.setState({email:newValue})}
						/>
	          <Input className='validate'
              label="پسورد جدید"
              type='password'
              name='password'
              id='password'
					   	onChange = {(event,newValue) => this.setState({password:newValue})}
	          />
					</form>
					<DialogActions>
						<div className="modal-footer row ">
							<Button type='submit' name='btn_login' variant="raised" className="buttonColor"  onClick={this.registerSubmit}>
								ثبت نام
							</Button>
						</div>
					</DialogActions>
				</DialogContent>
			</Dialog>
		);
	}
}

const mapStateToProps = (state) => {
    return{
      registerdata : state.registerdata
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      registerAction : registerAction,
    } , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
