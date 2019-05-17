import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import FormControl from '@material-ui/core/FormControl';
import React from 'react'
import {Col,Row,Input} from 'react-materialize';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import StatesAndCities from './SelectStatesAndCities'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

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


class Filtering extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      expand_more:"expand_more",
      filter :false,
      favorite : 0,
      city : null,
      ostan:null,
      subject : 0,
      price :0,
      startTime : null,
      endTime : null,
      online : null,
      archived : null
    }
    this.handleFiltering = this.handleFiltering.bind(this);
    this.giveState = this.giveState.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }
  componentWillMount(){
    this.props.filtering(this.state);
  }
  handleFiltering(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      filter : true,
      [name]: value
    });
    this.sendRequest();
  }
  giveState(state){
    this.setState({
      filter : true,
      city:state.cities,
      ostan : state.states
    });
    this.sendRequest();
  }
  sendRequest(){
    setTimeout(()=>{
      //{/* calling action  */}
      this.props.filtering(this.state);
      this.props.gotoLoading();
      console.log(this.state);

    },1000);
  }
  render(){
    const { classes } = this.props;
    return(
      <div className="row container">
        <div className="card  whiteSmoke darken-1">
          <div className="card-content black-text">
            <Row>
              <Col l={3} m={3} s={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="fav"> علاقه مندی </InputLabel>
                  <Select
                    value={this.state.favorite}
                    className="col  l12 m12 s12"
                    inputProps={{
                      name: 'favorite',
                      id: 'fav',
                    }}
                    onChange={this.handleFiltering}
                    >
                    <MenuItem value={1}> علاقه مندی </MenuItem>
                    <MenuItem value={2}>زمان</MenuItem>
                    <MenuItem value={0}>داغ ترین</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col l={3} m={3} s={12}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="sub"> موضوع </InputLabel>
                  <Select
                    value={this.state.subject}
                    className="col l12 m12 s12"
                    inputProps={{
                      name: 'subject',
                      id: 'sub',
                    }}
                    onChange={this.handleFiltering}
                    >
                    <MenuItem value={0}>زمان</MenuItem>
                    <MenuItem value={1}>داغ ترین</MenuItem>
                  </Select>
                </FormControl>
              </Col>
              <Col l={6} m={6} s={12}>
                <StatesAndCities giveState={this.giveState} />
              </Col>
            </Row>
          </div>
        </div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>جست و جوی پیشرفته </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Row>
              <Col  l={4} m={4} s={12} >
                <InputLabel htmlFor="price" >محدود کردن قیمت</InputLabel>
                <Select
                  value={this.state.price}
                  className="col l12 m12 s12"
                  inputProps={{
                    name: 'price',
                    id: 'price',
                  }}
                  onChange={this.handleFiltering}
                  >
                  <MenuItem value={0}>همه</MenuItem>
                  <MenuItem value={1}>رایگان</MenuItem>
                  <MenuItem value={2}>کمتر از ۵۰ هزار تومان</MenuItem>
                </Select>
              </Col>
              <Col l={4} m={4} s={12} className="push-l4 push-m4">
                <Input label="تاریخ شروع" s={12} type="text" onChange={this.handleFiltering} name="startTime"/>
              </Col>
              <Col l={4} m={4} s={12} className="pull-l4 pull-m4">
                <Input label="تاریخ اتمام" s={12} type="text" onChange={this.handleFiltering} name="endTime"/>
              </Col>
              <Col l={6} m={6} s={11} className="push-l2 push-m2 push-s2">
                <Input type="checkbox" label=' رویداد های انلاین '
                  name="online" id="online"
                  onChange={this.handleFiltering}
                  checked={this.state.online}
                />
              </Col>
              <Col l={6} m={6} s={12} className="push-s2">
                <Input type="checkbox" label=' رویداد های ارشیو شده'
                  name="archived" id="archive"
                  onChange={this.handleFiltering}
                  checked={this.state.archived}

                />
              </Col>
            </Row>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    )
  }
}
export default withStyles(styles)(Filtering);
