import React from 'react'
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default class MySetting extends React.Component{
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render(){
    return (
      <Card style={{direction:'rtl',marginTop:10}}>
        <CardContent>
          <Typography variant="headline" component="h2">
            تنظیمات اعلان ها
          </Typography>
          <br/><Divider /><br/><br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
                />
            }
            label="دریافت ایمیل"
            />
          <br/><Divider /><br/><br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
          }
          label="دریافت پیام ها"
          />
          <br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
              />
            }
            label="دعوت به رویداد از طرف برگزار کننده"
          /><br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                  onChange={this.handleChange('checkedB')}
                  value="checkedB"
                  color="primary"
                    />
          }
          label="یاد آوری قبل از رویداد"
          /><br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
                />
            }
            label="دریافت پیام ها"
          /><br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
                />
            }
            label="دریافت رویداد های هفتگی پیشنهادی"
          /><br/>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.checkedB}
                onChange={this.handleChange('checkedB')}
                value="checkedB"
                color="primary"
                />
            }
            label="دریافت خبرنامه"
          />
        </CardContent>

      </Card>
    )

  }
}
