import React from 'react';
import {Switch , Route ,Redirect } from 'react-router-dom';
import About from './About';
import Home from './Home';
import MakeEventForm from './MakeEventForm';
import Events from './Events';
import Details from './Details';
import Ticket from './Ticket';
import NotFound from './NotFound'
import ClientProfile from './clientProfile/ClientProfile'
const Main = (props) => (

	<main>
		<Switch>
		 	<Route exact path="/" component={Home} />
			<Route exact path="/about" component={About} />
			<Route exact path="/events"
				render={()=> <Events
					filtering={props.filtering}
					filteredEvents={props.filteredEvents}
					searchedQuery = {props.searchedQuery}
				/>}
			/>
			<Route exact path="/details" component={Details} />
			<Route exact path="/ticket/:tedad" component={Ticket} />
			<Route exact path="/makeEvent" component={props.logindata === false ? MakeEventForm : Home } />
			<Route exact path="/profile/:section" component = {props.logindata === false ? ClientProfile : Home} />
			<Route component={NotFound} />
		</Switch>
  </main>
)



export default Main;
