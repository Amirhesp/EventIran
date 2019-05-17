import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {BrowserRouter} from 'react-router-dom'
import {filtering} from './redux/actions/actions'
import {searching} from './redux/actions/actions'
import Main from './components/Main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './materialize_styles/css/materialize.min.css'
import './App.css';
import './color.css';

const App = (props) => (
  <div className="Site">
    <BrowserRouter>
      <div className="Site-content">
        <Navbar searching={props.searching} logindata={props.logindata}/>
        <Main
          logindata={props.logindata}
          filtering={props.filtering}
          filteredEvents={props.filteredEvents}
          searchedQuery = {props.searchedQuery}
        />
        <Footer/>
      </div>
    </BrowserRouter>
  </div>)

const mapStateToProps = (state) => {
    return{
      filteredEvents : state.filteredEvents,
      searchedQuery  : state.searchedQuery,
      logindata      : state.logindata
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      filtering : filtering,
      searching : searching,
    } , dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
