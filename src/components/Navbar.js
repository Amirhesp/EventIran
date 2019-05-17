import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';
import Register from './Register';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

class  Navbar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      redirect: false,
      query:"",
      openRegister :false,
      openLogin :false,
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      openDrawerRight:false,
      redirect: true,
      query : value,
    });
    //{/* calling action  */}
    this.props.searching(this.state.query);
    setTimeout(()=>{this.setState({
      redirect: false,

    })},500)
  }
  /* handle login and register */
  handleClickOpenRegister = () => {
  this.setState({ openRegister: true });
  };

  handleCloseRegister = () => {
    this.setState({ openRegister: false });
  };
  handleClickOpenLogin = () => {
  this.setState({ openLogin: true });
  };

  handleCloseLogin = () => {
    this.setState({ openLogin: false });
  };
  /*--------------------------*/

  render(){
    return(
      <div>
        <Login handleClose = {this.handleCloseLogin} openLogin = {this.state.openLogin}  />
        <Register handleClose = {this.handleCloseRegister} openRegister = {this.state.openRegister} />
        {this.state.redirect ? <Redirect to='/events' /> : <span></span> }
        <nav className="navBarColor">
          <div className="nav-wrapper  row">
            {/* logo */}
              <div className="col l2 offset-l1">
                <a href="/" className="brand-logo"> Evand </a>
              </div>
            {/*seach filed*/}
            <div className="input-field col l3 m8 s8" style={{padding:10,boxSizing:'border-box'}}>
              <input id="search" type="search" name="search" onChange={this.handleSearch}/>
              <label className="label-icon" htmlFor="search">
                <i className="material-icons" style={{marginTop:-10}}>search</i>
              </label>
            </div>
            {/* 'menu icon' -> in medium and small screen*/}
            <div className="col m2 s2"></div>
              <IconButton color="inherit" aria-label="Menu" className="hide-on-large-only" onClick={()=>this.setState({openDrawerRight:true})}>
                <MenuIcon />
              </IconButton>
            {/* Desktop view (Top panel)*/}
            <Drawer anchor="right"
              open={this.state.openDrawerRight}
              onClose={()=>this.setState({openDrawerRight:false})}>
              <div
                tabIndex={0}
                role="button"
                style={{width: 250,padding:20,textAlign:'right',lineHeight:3}}
                onClick={()=>this.setState({openDrawerRight:false})}
                onKeyDown={()=>this.setState({openDrawerRight:false})}
              >
              {
                this.props.logindata === true
                ?
                <span>
                  <Divider />
                  <List> <Link to="/makeEvent">ایجاد رویداد</Link> </List>
                  <Divider />
                  <List> <Link to="/profile/edite"> حساب کاربری </Link> </List>
                </span>
                :
                <span>
                  <List onClick={this.handleClickOpenLogin}>
                    ورود
                  </List>
                  <Divider />
                  <List onClick={this.handleClickOpenRegister}>
                    عضویت
                  </List>
                  <Divider />
                  <List onClick={this.handleClickOpenLogin}>
                    ایجاد رویداد
                  </List>
                </span>
             }
              <Divider />
              <List> <Link to="/">خانه</Link> </List>
              <Divider />
              <List> <Link to="/events">رویداد ها </Link> </List>
              <Divider />
              <List> <Link to="/about"> درباره ما </Link> </List>
              </div>
            </Drawer>
            <ul id="nav-mobile" className="hide-on-med-and-down col l6">
              <li>
                <Link to="/about">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link to="/events">رویداد ها</Link>
              </li>
              <li>
                <Link to="/">خانه</Link>
              </li>
              {
                this.props.logindata === true
                ?
                <span>
                  <li>
                    <Link to="/profile/edite">حساب کاربری</Link>
                  </li>
                  <li>
                    <Link to="/makeEvent">ایجاد رویداد</Link>
                  </li>
                </span>
                :
                <span>
                  <li>
                    <a onClick={this.handleClickOpenRegister}> عضویت </a>
                  </li>
                  <li>
                    <a onClick={this.handleClickOpenLogin}> ورود </a>
                  </li>
                  <li>
                    <a onClick={this.handleClickOpenLogin}> ایجاد رویداد </a>
                  </li>
                </span>
             }

            </ul>
          </div>

        </nav>
      </div>
    )
  }
}
export default Navbar;
