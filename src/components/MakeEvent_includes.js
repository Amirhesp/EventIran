import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import {Modal,Col, Row ,Input} from 'react-materialize'
import React from 'react'
// import data from './../Province.json'

export function AddTimeFiled(props){
  let rows=[];
  for (var i = 0; i < props.countTime ; i++) {
    rows.push(
      <div key={i}>
        <Col l={4} m={4} s={12}  className="push-l8 push-m8"><Input type="text" m={12} s={12} label="تاریخ شروع" name={"startDay[]"} onChange={props.validateFormInput} required/></Col>
        <Col l={4} m={4} s={12}><Input type="text" m={12} s={12} label="ساعت شروع" name={"startTime[]"} required/></Col>
        <Col l={4} m={4} s={12} className="pull-l8 pull-m8"><Input type="text" m={12} s={12} label="ساعات پایان" name={"endTime[]"}  required/></Col>
      </div>
    )
  }
  return(<div>{rows}</div>);
}
export class AddTicketFiled extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ticketType:0
    }
  }
  render(){
    let rows=[];
    for (var i = 0; i < this.props.countTicket ; i++) {
      rows.push(
        <div key={i}>
          <Input label="مبلغ (تومان )" type="text" l={3} m={3} s={12}
            labelClassName="labelClassName"
            name="ticketPrice[]"
            onChange = {this.props.validateFormInput}
          />
        <Col>
            <FormControl>
              <select
                onChange={(event)=>{this.setState({ [event.target.name]: event.target.value })} }
                style={{minWidth:'100% !important',marginTop:30}}
                name="ticketType[]"
                >
                <option value={0} >رایگان</option >
                <option value={1}> دارای هزینه ثبت نام </option>
              </select>
            </FormControl>
          </Col>
          <Input label="تعداد" type="text" l={2} m={2} s={12} onChange = {this.props.validateFormInput} name="ticketnumber[]" required/>
          <Input label="عنوان بلیت" type="text" name="Tickettitle[]" l={3} m={3} s={12} onChange = {this.props.validateFormInput} required/>
        </div>
      )
    }
    return(<div>{rows}</div>)
  }
}
  export function TermsofUse(props){
    return(
      <div>
        <Modal trigger={<span style={{cursor:'pointer'}} className="hyperLinkColor"> ( مطالعه شرایط استفاده) </span>} >
          <h5 style={{textAlign:'right'}}> شرایط ثبت رویداد </h5>
          <hr className="hr" />
          <p style={{textAlign:'right',marginTop:40}}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
          </p>
          <ul>
            <li>سبامتب مسنیتمتسب سمنبتسمیبتسشیب</li>
            <li>سبامتب مسنیتمتسب سمنبتسمیبتسشیب</li>
            <li>سبامتب مسنیتمتسب سمنبتسمیبتسشیب</li>
            <li>سبامتب مسنیتمتسب سمنبتسمیبتسشیب</li>
          </ul>
          <p>
            شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ بهپایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>

        </Modal>
      </div>
    )
  }
export class EventSetting extends React.Component{
  constructor(props){
    super(props);
    this.state={
      eventType : 1,
      eventSection : 1
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render(){
    return(
      <Row>
        <br/><br/>
        <Col l={6} m={6} s={12} className="push-l6">
          <InputLabel htmlFor="eventType"> نوع رویداد </InputLabel>
          <Select
            className="col l12 m12 s12 "
            value={this.state.eventType}
            inputProps={{name: 'eventType',id: 'eventType',}}
            onChange={this.handleChange}
            required
          >
            <MenuItem value={0} >انتخاب</MenuItem>
            <MenuItem value={1}>اکسپو</MenuItem>
            <MenuItem value={2}>جشن</MenuItem>
            <MenuItem value={3}>جلسه</MenuItem>
            <MenuItem value={4}>دورهمی</MenuItem>
            <MenuItem value={5}>سمینار</MenuItem>
            <MenuItem value={6}>کارگاه</MenuItem>
            <MenuItem value={7}>کنسرت</MenuItem>
            <MenuItem value={8}>کنفرانس</MenuItem>
            <MenuItem value={9}>سفر</MenuItem>
            <MenuItem value={10}>رقابت</MenuItem>
            <MenuItem value={11}>رویداد</MenuItem>
            <MenuItem value={12}>دوره</MenuItem>
            <MenuItem value={13}>وبینار</MenuItem>
            <MenuItem value={14}>همایش</MenuItem>
            <MenuItem value={15}>کنگره</MenuItem>
            <MenuItem value={16}>تئاتر</MenuItem>
            <MenuItem value={17}>غیره</MenuItem>
          </Select>
        </Col>
        <Col l={6} m={6} s={12} className="pull-l6">
          <InputLabel htmlFor="EventSection"> شاخه </InputLabel>
          <Select
            className="col l12 m12 s12"
            value={this.state.eventSection}
            inputProps={{name: 'eventSection',id: 'eventSection'}}
            onChange={this.handleChange}
            required
          >
            <MenuItem value={0} disabled={true}>انتخاب</MenuItem>
            <MenuItem value={1} data-reactid="426">تکنولوژی</MenuItem>
            <MenuItem value={2} data-reactid="427">کارآفرینی</MenuItem>
            <MenuItem value={3} data-reactid="428">فرهنگی هنری</MenuItem>
            <MenuItem value={4} data-reactid="429">گردشگری</MenuItem>
            <MenuItem value={5} data-reactid="430">مدیریت</MenuItem>
            <MenuItem value={6} data-reactid="431">کسب و کار</MenuItem>
            <MenuItem value={7} data-reactid="432">فنی، مهندسی و صنعت</MenuItem>
            <MenuItem value={8} data-reactid="433">خیریه</MenuItem>
            <MenuItem value={9} data-reactid="434">مذهبی و مناسبتی</MenuItem>
            <MenuItem value={10} data-reactid="435">پزشکی</MenuItem>
            <MenuItem value={11} data-reactid="436">مالی</MenuItem>
            <MenuItem value={12} data-reactid="437">توسعه فردی و خانواده</MenuItem>
            <MenuItem value={13} data-reactid="438">تحصیلی</MenuItem>
            <MenuItem value={14} data-reactid="439">ورزشی</MenuItem>
            <MenuItem value={15} data-reactid="440">سرگرمی</MenuItem>
            <MenuItem value={16} data-reactid="441">علوم انسانی</MenuItem>
            <MenuItem value={17} data-reactid="442">علوم پایه</MenuItem>
            <MenuItem value={18} data-reactid="443">غیره</MenuItem>
          </Select>
        </Col>
        <br/><br/>
      </Row>
    )

  }
}
