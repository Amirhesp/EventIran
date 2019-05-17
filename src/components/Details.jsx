import React, {Component} from 'react';
import {Col,Row,Input,CardPanel,Button,Icon} from 'react-materialize';
import { withStyles } from '@material-ui/core/styles';
import  MenuItem  from '@material-ui/core/MenuItem';
import  InputLabel  from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: '90%'
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});
class Deatails extends Component{
  constructor(props){
    super(props);
    this.state={
      tedad :0,
      name : 'hello',
      text:'',
      select:''
    }
  }

  render(){
    return(
      <div>
        <div style={{width:'100%',height:300,backgroundSize:'cover',position:'absolute',zIndex:'-1',overflow:'hidden'}}>
          <img src={require('../pic.jpg')} style={{height:'320px',width:'105%',filter:'blur(10px)',margin:'-5px 0 0 -5px'}} alt="not loaded"/>
        </div>
        <div className="container" style={{background:'white',zIndex:'1'}}>
           <Row>
                <Col l={2} style={{textAlign:'center',padding:'6px 0 0 15px'}}>
                  <h6>برگزار کننده رویداد</h6>
                  <br/>
                  <span style={{fontSize:'bold'}}>موسسه توسعه دهندگان نارون</span><br/><br/>
                  <span style={{fontSize:'13px',color:'purple'}}>تماس با برگزار کننده <Icon tiny>call</Icon></span><br/><br/>
                  <span>۰۹۱۹۸۵۱۵۴۲۹</span>
                  <Input className=" btn  buttonColor"  type="button" defaultValue='ارسال پیام' s={12}/>
                  <Input className=" btn  buttonColor"  type="button" defaultValue='دنبال کنید' s={12}/>
                </Col>
                <Col l={7}>
                  <div style={{background:'url('+require('../pic.jpg')+')',height:300,backgroundSize:'100% 100%'}}>
                  </div>
                </Col>
                <Col l={3} style={{textAlign:'right',padding:'6px 20px 0 0'}}>
                  <h6 style={{fontWeight:'bold',fontSize:'19px'}}>اسرار فروش میلیونی ویدئو های آموزشی</h6><br/>
                  <div>
                    <span style={{fontSize:'12px'}}>شروع رویداد</span><br/><br/>
                    <span>  چهارشنبه ۱۹ اردیبهشت ۹۷ <i className="material-icons tiny">alarm</i></span>
                    <span>۹:۰۰ <i className="material-icons tiny">event_available</i></span><br/><br/>
                    <span style={{fontSize:'12px'}}>پایان رویداد </span><br/><br/>
                    <span>  چهارشنبه ۱۹ اردیبهشت ۹۷ <i className="material-icons tiny">alarm</i></span>
                    <span>۹:۰۰ <i className="material-icons tiny">event_available</i></span>
                  </div>
                </Col>
            </Row>
        </div>
        <Row className="container">
          <Col s={12} m={5} l={3} style={{textAlign:'center'}}>
            <CardPanel>
              <h6>رویداد آنلاین است</h6>
            </CardPanel>
            <CardPanel>
                  <span>دوستان خود را دعوت کنید</span><br/><br/>
              <Row>
                  <Button className="buttonColor">کپی لینک</Button>
                  <Input  value="https://evnd.co/X7dUT" style={{textAlign:'center',marginLeft:'17px'}}/>
              </Row>
            </CardPanel>
            <CardPanel>
                <span>اگر مایل به اطلاع از رویدادهای مشابه این رویداد هستید، کلیک کنید</span><br/><br/>
              <Row>
                <Button className="buttonColor"> مرا با خبر کن</Button>
              </Row>
            </CardPanel>
          </Col>
         <Col s={12} m={5} l={9}>
           <CardPanel>
               <table>
                <tbody>
                  <tr>
                    <th> تعداد</th>
                    <th> قیمت</th>
                    <th> مهلت ثبت‌نام</th>
                    <th> جزئیات</th>
                  </tr>
                  <tr>
                      <td>
                        <InputLabel htmlFor="tedad">  </InputLabel>
                        <Select
                                value={this.state.tedad}
                                type='select'
                                required
                                className="col l12 m12 s12 "
                                onChange={(event)=>{this.setState({ [event.target.name]: event.target.value })} }
                                inputProps={{
                                  name: 'tedad',
                                  id: 'tedad',
                                }}>
                                <MenuItem value={0}>
                                   <em>تعداد</em>
                                 </MenuItem>
                                 <MenuItem value={1}>۱</MenuItem>
                                 <MenuItem value={2}>۲</MenuItem>
                                 <MenuItem value={3}>۳</MenuItem>
                        </Select>
                      </td>
                      <td> ۲۸۹,۰۰۰	 </td>
                      <td> ۳۱ اردیبهشت </td>
                      <td> ثبت نام زود هنگام <br/> <span style={{fontSize:'11px'}}>ظرفیت محدود است؛ برای ده نفر اول.!</span>  </td>
                  </tr>
                  <tr>
                      <td></td>
                      <td> ۲۸۹,۰۰۰	 </td>
                      <td> ۳۱ اردیبهشت </td>
                      <td> ثبت نام زود هنگام <br/> <span style={{fontSize:'11px'}}>ظرفیت محدود است؛ برای ده نفر اول.!</span>  </td>
                  </tr>
                  <tr>
                       <td></td>
                       <td> ۲۸۹,۰۰۰	 </td>
                       <td> ۳۱ اردیبهشت </td>
                       <td> ثبت نام زود هنگام <br/> <span style={{fontSize:'11px'}}>ظرفیت محدود است؛ برای ده نفر اول.!</span>  </td>
                  </tr>
                </tbody>
               </table><br/>
                 <Row>
                   <Col l={4}>
                       <Button
                           className="btn buttonColor"
                           type="submit"
                           defaultValue=" ثبت نام "
                           disabled={!this.state.tedad}
                        >
                         <Link to={"/Ticket/"+this.state.tedad}>
                            ثبت نام
                         </Link>
                      </Button>
                   </Col>
                   <Col l={5}  className='offset-l3' >
                     <Input
                       className="btn buttonColor"
                       type="button"
                       defaultValue="اعمال"
                       disabled={!this.state.text}
                        />
                      <Input l={4} type='text'
                                   name='takhfif'
                                   value={this.state.text}
                                   onChange={(e)=>{
                                     this.setState({text: e.target.value});
                                   }}
                                   placeholder="کد تخفیف"
                                   style={{textAlign:'right'}}
                                  />
                   </Col>
                 </Row>
           </CardPanel>
         </Col>
        </Row>
      </div>


    );
  }
}
Deatails.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Deatails);
