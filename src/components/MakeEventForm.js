import React, {Component} from 'react';
import {Input, Col, Row} from 'react-materialize'
import Button from '@material-ui/core/Button';
import {AddTimeFiled,AddTicketFiled,TermsofUse,EventSetting} from './MakeEvent_includes'
import StatesAndCities from './SelectStatesAndCities'

class MakeEventForm extends Component {
  constructor(props){
    super(props);
    this.state={
      imageLink:require("./../index.jpg"),
      countTime:1,
      countTicket:1,
      haveError:false,
      TermsـofـUse_Allowed:false
    }
    this.handleImageReview = this.handleImageReview.bind(this);
    this.validateFormInput = this.validateFormInput.bind(this);
  }
  handleImageReview(event){
    var source = URL.createObjectURL(event.target.files[0]);
    this.setState({
      imageLink:source
    });

  }
  validateFormInput(event){
    var regexp;
    var notValid;
    switch (event.target.name) {
      case 'phone':
        regexp = /^\d{11}$/;
        notValid = event.target.value.match(regexp) ? false : true;
        break;
      case 'ticketPrice':
        regexp = /^\d*$/;
        notValid = event.target.value.match(regexp) ? false : true;
        break;
      case 'ticketnumber':
        regexp = /^[1-9]$|^[1-9][0-9]$|^[1-9][0-9][0-9]$|^[0-9][0-9][0-9][0-9]$/;
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

  handleSubmit() {
    if (!this.state.haveError && this.state.TermsـofـUse_Allowed) {
      document.myform.submit();
    }
  }

  render() {
    return (
      <div style={{direction: "rtl"}}>
        <div className="row" style={{marginTop:30}}>
         {/* support field */}
          <div className="col l3 offset-l1 hide-on-med-and-down">
            <div className="card whiteSmoke darken-1">
              <div className="card-content black-text">
                <span className="card-title hyperLinkColor" style={{
                    textAlign: "center"
                  }}>پشتیبانی</span>
                <p style={{
                    textAlign: 'justify'
                  }}>
                  ﺩﺭ ﺻﻮﺭتی که نیاﺯ ﺑﻪ ﺭاﻫﻨﻤﺎیی بیشتری ﺩاریدﺑﺎ ﻣﺎ ﻭ ﺑﺎ اﺳﺘﻔﺎﺩﻩ
                   اﺯ ﺷﻤﺎﺭﻩ ﺗﻠﻔﻦ ۰۹۱۹۸۵۱۵۴۲۹ ﺗﻤﺎﺱ بگیرید یا ﺭاﻫﻨﻤﺎی ﻣﺮﺑﻮﻁ ﺑﻪ ﺻﻔﺤﻪ ﺭویداﺩ ﺭا اﺯ ﻃﺮیق ﻣﺮاﺟﻌﻪ ﺑﻪ این لینک ﻣﻄﺎﻟﻌﻪ کنید در صورتی که نیاز به راهنمایی بیشتری دارید با ما و با استفاده از شماره تلفن ۰۹۱۹۸۵۱۵۴۲۹ تماس بگیرید یا راهنمای مربوط به صفحه رویداد را از طریق مراجعه به این لینک مطالعه کنید
                </p>
              </div>
              <a href="" className="btn buttonColor" style={{
                  display: "flex",
                  justifyContent: 'center',
                }}>
                راهنمای ایجاد رویداد
              </a>
            </div>
          </div>
          <form action="" method="get" name="myform" className="col l8 m12 s12" encType="multipart/form-data" onSubmit={this.handleSubmit} >
            <div className="card col l11">
              <Row>
                <Col l={12} m={12} s={12}>
                  <div className="card-content black-text">
                    <div className="card headingColor">
                      <div className="card-content white-text">
                        <h6 style={{color: "white",fontWeight: "bold"}}>اطلاعات رویداد</h6>
                      </div>
                    </div>
                    <div className="row right-align">
                      <div className="input-field col s12 m12 l12 ">
                        <Input type="text" label="نام رویداد" name="eventName" l={12} s={12} onChange={this.validateFormInput} required/>
                      </div>
                      <Row>
                        <Col s={12} l={9} m={9} className="push-l2 push-m2">
                          <AddTimeFiled countTime = {this.state.countTime} validateFormInput={this.validateFormInput}/>
                        </Col>
                        <Col l={3} s={12} m={3} className="pull-l9 pull-m9">
                          <Col s={5} l={4} m={4}>
                            <span className="btn-floating btn-small buttonColor" style={{marginTop:"30px"}}>
                              <i className="material-icons"
                                onClick={()=>{
                                  this.setState({
                                    countTime:this.state.countTime+1
                                  })
                                }}
                              >add</i>
                            </span>
                          </Col>
                          <Col s={6} l={5} m={5}>
                            <span className="btn-floating btn-small waves-effect waves-light red" style={{marginTop:"30px"}}>
                              <i className="material-icons"
                                onClick={()=>{
                                  this.setState({
                                    countTime:this.state.countTime>1 ? this.state.countTime-1 : this.state.countTime
                                  })
                                }}
                              >remove</i>
                            </span>
                          </Col>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <hr className="hr" />
                </Col>
              </Row>
              <Row>
                <Col l={12} m={12} s={12}>
                  <div className="card-content black-text">
                    {/* card title */}
                    <div className="card  headingColor">
                      <div className="card-content white-text">
                        <h6 style={{
                            color: "white",
                            fontWeight: "bold"
                          }}>تصویر کاور</h6>
                      </div>
                    </div>
                    {/* card image */}

                    <div className="card">
                      <div className="card-image">
                        <img src={this.state.imageLink} alt="img"/>
                      </div>
                    </div>
                    <input type="file" className="card-title" name="image"
                      onChange={this.handleImageReview}
                      style={{
                        fontSize: "12px",
                        marginTop: "30px"
                      }} />
                    <p style={{fontSize: "12px" , direction:'rtl'}}>
                      ابعاد تصویر ارسالی باید  عرض 720 و ارتفاع 450 داشته وحجم آن حداکثر ۱ مگابایت باشد
                    </p>
                  </div>
                  <hr className="hr" />
                </Col>
              </Row>
              <Row>
                <Col l={12} m={12} s={12}>
                  <div className="card-content black-text">
                    <div className="card  headingColor">
                      <div className="card-content white-text">
                        <h6 style={{color: "white",fontWeight: "bold"}}>
                          محل برگزاری
                        </h6>
                      </div>
                    </div>
                    <Row>
                      <Col s={12} l={12} m={12} style={{marginTop:20}}>
                        <Input name="online" type="checkbox"
                          value="online" label="این رویداد انلاین برگزار می شود و آدرس ندارد " l={12} m={12} s={12}
                        />
                      </Col>
                      <StatesAndCities />
                      <Col  l={12}  s={12} >
                        <Input label="آدرس را وارد کنید" type="textarea" name="Address" l={12}  s={12}
                          onChange={this.validateFormInput}
                        />
                      </Col>
                    </Row>
                  </div>
                  <hr className="hr" />
                </Col>
              </Row>
              <Row>
                <Col l={12} s={12} m={12}>
                  <div className="card-content black-text">
                    <div className="card  headingColor">
                      <div className="card-content white-text">
                        <h6 style={{color: "white",fontWeight: "bold"}}>برگزار کننده</h6>
                      </div>
                    </div>
                    <Row>
                      <Input label="نام برگزار کننده" type="text" name="OrganizerName" l={6} m={6} s={12} onChange={this.validateFormInput} required/>
                      <Input label="شماره برگزار کننده" type="text" name="phone" l={6} m={6} s={12} onChange={this.validateFormInput} required/>
                      <Input label="میتوانید گروه شرکت و یا سازمان خود را به شرکت کننده معرفی کنید" name="introduction" type="textarea" l={12} m={12} s={12} onChange={this.validateFormInput}/>
                    </Row>
                  </div>
                  <hr className="hr" />
                </Col>
              </Row>
              <Row>
                <Col l={12} m={12} s={12}>
                  <div className="card-content black-text">
                    <div className="card  headingColor">
                      <div className="card-content white-text">
                        <h6 style={{color: "white",fontWeight: "bold"}}>بلیت ها</h6>
                      </div>
                    </div>
                    <Row>
                      <Col l={10} m={10} s={12}>
                        <AddTicketFiled countTicket = {this.state.countTicket} validateFormInput={this.validateFormInput}/>
                      </Col>
                      <Col l={1} m={1} s={6} style={{marginTop: "40px"}}>
                        <i className=" material-icons" style={{cursor:'pointer'}}
                          onClick={()=>{
                            this.setState({
                              countTicket:this.state.countTicket>1 ? this.state.countTicket-1 : this.state.countTicket
                            })
                          }}
                          >delete</i>
                      </Col>
                      <Col l={1} m={1} s={3} style={{marginTop: "40px"}}>
                        <i className='material-icons'  style={{cursor:'pointer'}}
                          onClick={()=>{
                            this.setState({
                              countTicket:this.state.countTicket+1
                            })
                          }}
                          >add</i>
                      </Col>
                    </Row>
                  </div>
                  <hr className="hr" />
                </Col>
              </Row>
              <Row>
                <Col l={12} m={12} s={12}>
                  <div className="card-content black-text">
                    {/* event form3 title */}
                    <div className="card  headingColor">
                      <div className="card-content white-text">
                        <h6 style={{
                            color: "white",
                            fontWeight: "bold"
                          }}>تنظیمات رویداد</h6>
                      </div>
                    </div>
                    <EventSetting validateFormInput = {this.validateFormInput}/>
                  </div>
                  <hr className="hr" />
                </Col>
              </Row>
              <Row className="card-content black-text">
                <Col l={4} m={4} s={12}  style={{marginTop:20}}>
                  <TermsofUse />
                </Col>
                <Col l={8} style={{marginTop:20}}>
                <Input
                  l={12} m={12} s={12}
                  type='checkbox'
                  name = "TermsofUse"
                  label='با شرایط و قوانین ایجاد رویداد در ایوند موافق هستم'
                  onChange={()=>{
                    this.setState({
                      TermsـofـUse_Allowed:!this.state.TermsـofـUse_Allowed
                    });
                  }}
                required />
                </Col>
                <Col l={9} style={{marginTop:20}}>
                  <p
                    l={12} m={12} s={12}
                    style={{
                      fontSize: "12px",
                      textAlign: 'right'
                    }}
                  >
                    پس از ثبت رویداد خود با ورود به بخش "مدیریت رویداد" امکان تغییر اطلاعات فوق و افزودن سایر اطلاعات رویداد خود را دارید
                  </p>
                </Col>
                <Col l={3} style={{marginTop:20}}>
                  <Button type="submit"
                    variant="raised" className="buttonColor"
                    disabled={(!this.state.haveError && this.state.TermsـofـUse_Allowed) ? false : true}
                  >
                    دخیره و انتشار
                  </Button>
                </Col>
              </Row>
            </div>
          </form>
        </div>
      </div>);
  }
}
export default MakeEventForm;
