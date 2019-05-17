import React, { Component } from 'react';
import {connect} from 'react-redux'
import {loginAction} from './../redux/actions/actions'
import {bindActionCreators} from 'redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Input} from 'react-materialize'
import { withStyles } from '@material-ui/core/styles';
import {Col,Row} from 'react-materialize';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

function Transition(props) {
  return <Slide direction="right" {...props} />;
}
class Login extends Component{
  constructor(props){
    super(props);
    this.state = ({
      email : "",
      password : ""
    });
  }
  handleChange = (event)=>{
    this.setState({
      [event.target.name] : event.target.value,
    });
  }
  loginSubmit = ()=>{
    this.props.loginAction(this.state.email , this.state.password);
  }
	render(){
		return(

  			<Dialog
  				style={{direction:'rtl'}}
            open={this.props.openLogin}
            TransitionComponent={Transition}
            keepMounted
            onClose={this.props.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <Row>
              <div className="container">
                <Col l={8}>

              			<DialogTitle id="alert-dialog-slide-title">
              				ورود
              			</DialogTitle>

              			<DialogContent style={{overflowX:'hidden'}}>
                      <Typography color="textSecondary">
                        برای خرید بلیط و یا ثبت رویداد باید عضو باشید
                      </Typography>
              				<Input type='email' name='email' label="ایمیل خود را وارد کنید" onChange={this.handleChange}/>
              				<Input type='password' name='password' label="پسورد خود را وارد کنید" onChange={this.handleChange}/>
              				<DialogActions>
                       <Row>
                         <Col l={12}>
                					<a href=""  style={{textDecoration:"underline",fontSize:"12px"}}> رمز خود را فراموش کردم ! </a>
                					<Button type='submit' name='btn_login' variant="raised" className="buttonColor" onClick={this.loginSubmit}>
                						ورود
                					</Button>
                          </Col>
                       </Row>
              				</DialogActions>
              			</DialogContent>

                </Col>

                <Col l={4}>
                  <span>hello world</span>
                </Col>

              </div>
            </Row>
  		  </Dialog>

		)
	}
}

const mapStateToProps = (state) => {
    return{
      logindata : state.logindata
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      loginAction : loginAction,
    } , dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
