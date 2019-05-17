import React, {Component} from 'react';
import SingleEvent from './SingleEvent'
import Filtering from './Filtering'

class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      AllEvents:[],
      loading:true
    }
    this.getBoxes = this.getBoxes.bind(this);
    this.gotoLoading = this.gotoLoading.bind(this);
  }
  componentWillMount(){
    this.getBoxes();
  }
  gotoLoading(string){
    this.setState({
      loading:true
    });
    return true;
  }
  getBoxes(props){
    var AllEvents;
    setInterval(()=>{
      if(Promise.resolve(this.props.searchedQuery) === this.props.searchedQuery){
        Promise.resolve(this.props.searchedQuery)
        .then((value)=>{
          if(value !== AllEvents){
            AllEvents = value;
            this.setState({
              AllEvents,
              loading:false
            });
          }
        });
      }else{
        Promise.resolve(this.props.filteredEvents)
        .then((value)=>{
          if(value !== AllEvents){
            AllEvents = value;
            this.setState({
              AllEvents,
              loading:false
            });
          }
        });
      }
    },1000)
  }
  render(props) {
    let events = this.state.AllEvents;
    return (
      <div className="row" style={{ direction: "rtl" }}>
        <Filtering filtering={this.props.filtering} gotoLoading={this.gotoLoading}/>
        <h5 style={{display: this.state.loading ? 'block' : 'none',textAlign:'center'}}> . . . loading</h5>
        <div className="container">
          <div className="row">
            <div className="col l12 m12 s12">
              {events.map((obj)=><SingleEvent key={obj.id} data={obj} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
} export default Events;
