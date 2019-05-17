import React from 'react'
import {withStyles} from '@material-ui/core/styles';
import data from './../Province.json'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {Col, Row } from 'react-materialize'


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


class StatesAndCities extends React.Component{
  constructor(props){
    super(props);
    this.state={
      cities :"",
      states :"",
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // give the state to the parent
    setTimeout(()=>{
      if(this.props.giveState){
        this.props.giveState (this.state);
      }
    },1000)
  };
  render(){
    let states=[];
    let cities=[];
    for (var i = 0; i < data.length ; i++) {
      states.push(
        <MenuItem key={i} value={data[i].name} > {data[i].name} </MenuItem>
      )
    }
    for (let i = 0; i < data.length ; i++) {
      if(data[i].name === this.state.states){
        for (var j = 0; j < data[i].Cities.length; j++) {
          cities.push(
            <MenuItem key={i+"_"+j} value={data[i].Cities[j].name}> {data[i].Cities[j].name} </MenuItem>
          )
        }
      }
    }
    return(
      <Row>
        <Col l={6} m={6} s={12} className="push-l6 push-m6">
          <InputLabel htmlFor="states"> استان </InputLabel>
          <Select
            value={this.state.states}
            className="col l12 m12 s12 "
            onChange={this.handleChange}
            inputProps={{
              name: 'states',
              id: 'states',
            }}
          >
            {states}
          </Select>
        </Col>
        <Col l={6} m={6} s={12} className="pull-l6 pull-m6">
          <InputLabel htmlFor="cities"> شهرستان </InputLabel>
          <Select
            className="col l12 m12 s12 "
            value={this.state.cities}
            onChange={this.handleChange}
            inputProps={{
              name: 'cities',
              id: 'cities',
            }}
            >
            {cities}
          </Select>
        </Col>
      </Row>
    )
  }
}
export default withStyles(styles)(StatesAndCities);
