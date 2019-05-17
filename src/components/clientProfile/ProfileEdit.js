import React from 'react'
import {Row,Col,Input} from 'react-materialize'
import StatesAndCities from './../SelectStatesAndCities'
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import CardActions  from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

export default class ProfileEdit extends React.Component{
  constructor(props){
    super(props);
    this.state={
      imageLink:require("./../../profile.svg"),
      haveError:false,
    }
    this.handleImageReview = this.handleImageReview.bind(this);
  }
  submit = ()=> {
    if (!this.state.haveError) {
      document.editForm.submit();
    }
  }
  validateFormInput = (event)=>{
    var regexp;
    var notValid;
    switch (event.target.name) {
      case 'phone':
        regexp = /^\d{11}$/;
        notValid = event.target.value.match(regexp) ? false : true;
        break;
      case 'email' :
        regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        notValid = event.target.value.toLowerCase().match(regexp) ? false : true;
        break;

      default:
        regexp = /(\*|#|>|<|\\|!)/i;
        notValid = regexp.test(event.target.value);
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
  handleImageReview(event){
    var source = URL.createObjectURL(event.target.files[0]);
    this.setState({
      imageLink:source
    });

  }
  render(){
    return (
        <form action="/" method="post" className="card-content black-text" name="editForm" encType="multipart/form-data" onSubmit={this.submit} >
          <Card style={{direction:'rtl',marginTop:10}}>
          <CardContent>
            <Row>
              <Col l={4}>
                <div className="card">
                  <div className="card-image">
                    <img src={this.state.imageLink} alt="img"/>
                  </div>
                </div>
                <input className="imageUploading" type="file" name="image"
                  onChange={this.handleImageReview}
                  style={{
                    fontSize: "12px",
                    marginTop: "30px"
                  }} />
                  <p style={{fontSize: "10px" , direction:'rtl' , textAlign:'right'}}>
                    (عکس باید 400x400 باشد )
                  </p>
              </Col>
              <Col  l={8}  m={8} s={12} >
                <h5>ویرایش پروفایل کاربر :</h5>
                <hr style={{border:'none', marginBottom:10,borderTop:'1px solid #eee'}}/>
                <Input label="نام" type="text" name="name" s={12}  onChange={this.validateFormInput} required/>
                <Input label="نام خانوادگی" type="text" name="lastname"   s={12} onChange={this.validateFormInput} required />
              </Col>
              <Col s={12}>
                <StatesAndCities />
              </Col>
              <Col  l={12}  s={12} >
                <Input label="تاریخ تولد" placeholder="1375/07/29" type="text" name="birthday" l={4} m={4}  s={12} onChange={this.validateFormInput} required />
                <Input label="موبایل" placeholder="09xxxxxxxxx" type="text" name="phone" l={4} m={4}  s={12} onChange={this.validateFormInput} required />
                <Input label="ایمیل" placeholder="example@ex.com" type="text" name="email" l={4} m={4}  s={12}  onChange={this.validateFormInput} required />
              </Col>
            </Row>
          </CardContent>
          <CardActions>
            <Button type="submit"
              variant="raised" className="buttonColor"
              disabled={(!this.state.haveError) ? false : true}
            >
              ثبت
            </Button>

          </CardActions>
        </Card>
        </form>

        )

  }
}
