import React from 'react'
import Card  from '@material-ui/core/Card';
import CardContent  from '@material-ui/core/CardContent';
import CardActions  from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

function handleDelete() {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

function handleClick() {
  alert('You clicked the Chip.'); // eslint-disable-line no-alert
}
const chipStyle = {
  margin:5,padding:'0 15px'
}
export default function MyActivities(props){
  return (
    <div>
      <Card style={{direction:'rtl',marginTop:10}}>
        <CardContent>
          <h5>فعالیت های من : </h5>
          <hr style={{border:'none', marginBottom:10,borderTop:'1px solid #eee'}}/>
          <Typography color="textSecondary">
            تعداد رویداد های شرکت کرده
          </Typography>
          <Typography variant="headline" component="h2">
            52
          </Typography>
          <Typography  color="textSecondary">
            درموضوعات :
          </Typography>
          <Typography component="p">
            موضوع یک - موضوع دو -  موضوع سه - ...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card><br/>
      <Card style={{direction:'rtl'}}>
        <CardContent>
          <Typography color="textSecondary">
            رویداد های مورد علاقه شما
          </Typography>
          <Chip
            label="شماره یک"
            onClick={handleClick}
            style={chipStyle}
            onDelete={handleDelete}
            />
          <Chip
            label="شماره دو"
            style={chipStyle}
            onClick={handleClick}
            onDelete={handleDelete}
            />
        </CardContent>
      </Card>

      <br/><Card style={{direction:'rtl'}}>
        <CardContent>
          <Typography component="p">
            شما مدت زمان 12 ساعت رویداد شرکت کرده اید
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
