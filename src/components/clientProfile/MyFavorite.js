import React from 'react'
import Typography from '@material-ui/core/Typography';
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export default class MyFavorite extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          "id" : 1,
          "subject" : " ورزشی ",
          "active" : false
        },
        {
          "id" : 2,
          "subject" : " تکنولوژی ",
          "active" : false
        },
        {
          "id" : 3,
          "subject" : " لورم ایپسوم ",
          "active" : true
        },
        {
          "id" : 4,
          "subject" : " موضوع شماره یک ",
          "active" : false
        },
        {
          "id" : 5,
          "subject" : " موضوع شماره یک ",
          "active" : true
        },
        {
          "id" : 6,
          "subject" : " موضوع شماره یک ",
          "active" : false
        }
      ]
    }
  }
  handleClick(id){
    console.log(id);
    //send data width this id and active or no active it
    //send requset (item.id , active = !this.active)
  }
  render(){
    return (
      <Card style={{direction:'rtl',marginTop:10}}>
        <CardContent>
          <Typography variant="headline" component="h2">
            موضوعات مورد علاقه:
          </Typography><br/>
          <Typography component="p" color="textSecondary">
            در این قسمت می‌توانید موضوعات مورد علاقه خود را انتخاب کنید تا رویدادهای پیشنهادی به شما مطابق علاقه مندی های شما باشد
          </Typography><br/>
          <Divider /><br/><br/>
          {
            this.state.data.map((item)=>{
              return(
                <Button key={item.id}
                  className={item.active ? "favoriteButton activeFavoriteButton" : "favoriteButton "}
                  onClick={()=>{this.handleClick(item.id)}}
                  >
                  {item.subject}
                </Button>
              )
            })
          }
        </CardContent>
      </Card>
    )
  }
}
