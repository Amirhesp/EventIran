import React, {Component} from 'react';
import {Col,Row,Input,CardPanel,Button} from 'react-materialize';
import '../App.css';
import {AddTicketForm} from './TicketForm';
import TicketProgressBar from './TicketProgressBar';
import Login from './Login';
import {Link} from 'react-router-dom';
class Ticket extends Component{
  constructor(props){
    super(props);
    this.state={
      haveError:false,
    }
    this.validateFormInput = this.validateFormInput.bind(this);
  }

  validateFormInput(event){
    var regexp;
    var notValid;
    switch (event.target.name) {

      case 'firstName':
        regexp = /^\d*$/;
        notValid = event.target.value.match(regexp) ? false : true;
        break;

      default:
        regexp = /(\*|#|>|<|\/|\\|!)/i;
        notValid = regexp.test(event.target.value);
        console.log(regexp.test(event.target.value));
        break;
    }
    if ( notValid ) {
      event.target.classList.add("invalid");
      this.setState({
        haveError : true
      });
    }
    else{
      event.target.classList.remove("invalid");
      this.setState({
        haveError : false
      })
    }
  }

  render(){
    console.log(this.props.match.params.tedad);
    return(
      <Row className="container">
        <Col l={3}>
          <div style={{textAlign:'right'}}>
            <CardPanel>
              <span>آدرس: کرج کرج - پل آزادگان- مجتمع فنی تهران نمایندگی البرز</span>
            </CardPanel>
        </div>
      </Col>
        <Col l={9}>
          <div style={{textAlign:'right'}}>
            <CardPanel>
              <h5>دوره روش تدریس تسول TESOL با ارائه مدرک بین المللی</h5>
              <span>پنج‌شنبه ۱۴ تیر ۱۳۹۷ ساعت ۱۳:۰۰ - جمعه ۲۷ مهر ۱۳۹۷ ساعت ۱۲:۰۰<i className="tiny material-icons">access_alarms</i></span><br/>
              <span>کرج  موضوع: کسب و کار<i className="tiny material-icons">location_on</i></span>
            </CardPanel>
            <CardPanel>
              <span style={{color:'grey'}}>زمان باقیمانده برای ثبت سفارش<i className="tiny material-icons">error_outline</i></span>
              <TicketProgressBar />
            </CardPanel>
            <CardPanel>
              <h6>پیش‌فاکتور</h6><hr/>
                <table>
                  <tbody>
                    <tr>
                      <th> جمع مبلغ</th>
                      <th> قیمت واحد</th>
                      <th>تعداد </th>
                      <th> عنوان بلیت	</th>
                      <th>ردیف</th>
                    </tr>
                    <tr>
                      <td> ۲,۴۵۰,۰۰۰ </td>
                      <td> ۲,۴۵۰,۰۰۰ </td>
                      <td> ۱ </td>
                      <td> دوره روش تدریس تسول TESOL </td>
                      <td> ۱ </td>
                    </tr>
                  </tbody>
                </table><br/>
            </CardPanel>
            <CardPanel>
              <Row>
                <span>  حساب کاربری دارید وارد شوید</span>

                    <Button
                      style={{color:'darkgray'}}
                      className="btn  grey lighten-2 left"
                      type="submit"
                      defaultValue="ورود به حساب کاربری ایوند"
                      >
                      <Link to='/Login' style={{color:'darkGrey'}}>ورود به حساب کاربری ایوند</Link>
                    </Button>

              </Row>
            </CardPanel>
            <CardPanel  style={{direction:'rtl'}} >
              <Row>
               <AddTicketForm tedad = {this.props.match.params.tedad} validateFormInput={this.validateFormInput} />

              </Row>
            </CardPanel>
          </div>
        </Col>
      </Row>
    );
  }
}
export default Ticket;
