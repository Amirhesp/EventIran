import React from 'react';
import {Col,Row,CardPanel,Icon,CollectionItem,Collection,Badge} from 'react-materialize';
import {Switch , Route , Link , Redirect} from 'react-router-dom';
import ProfileEdit from './ProfileEdit'
import MyActivities from './MyActivities'
import MyEvents from './MyEvents'
import MyTickets from './MyTickets'
import MyFavorite from './MyFavorite'
import MySetting from './MySetting'

export default class ClientProfile extends React.Component{
  render(){
    if(true){
      return(
        <Row>
          <div className="container">
            <Col l={3} m={4} s={12} className="push-l9 push-m8">
              <CardPanel className="white" style={{direction:"rtl",padding:0}}>
                <Collection>
                  <CollectionItem>
                    <Badge><Icon>account_circle</Icon></Badge>
                    <Link to='/profile/edit'  >
                      ویرایش پروفایل
                    </Link>
                  </CollectionItem>
                  <CollectionItem>
                    <Badge><Icon>event_seat</Icon></Badge>
                    <Link to='/profile/myActivities'  >
                      فعالیت های من
                    </Link>
                  </CollectionItem>
                  <CollectionItem>
                    <Badge><Icon>account_circle</Icon></Badge>
                    {/*<Link to='/profile/myEvents' >
                      رویداد های من
                      </Link>*/}
                      <span style={{color:"silver"}}> رویداد های من </span>
                    </CollectionItem>
                    <CollectionItem>
                      <Badge><Icon>credit_card</Icon></Badge>
                      <Link to='/profile/myTickets'  >
                        بلیط های من
                      </Link>
                    </CollectionItem>
                    <CollectionItem>
                      <Badge><Icon>favorite</Icon></Badge>
                      <Link to='/profile/favorite'  >
                        علاقه مندی ها
                      </Link>
                    </CollectionItem>
                    <CollectionItem>
                      <Badge><Icon>settings</Icon></Badge>
                      <Link to='/profile/setting'  >
                        تنظیمات اعلان ها
                      </Link>
                    </CollectionItem>
                    <CollectionItem>
                      <Badge><Icon>exit_to_app</Icon></Badge>
                      <Link to='/profile/exit'  >
                        خروج
                      </Link>
                    </CollectionItem>
                  </Collection>
                </CardPanel>
              </Col>
              <Col l={9} m={8} s={12} className="pull-l3 pull-m4">
                <Switch>
                  <Route exact path='/profile/edit'         component={ProfileEdit} />
                  <Route exact path='/profile/myActivities' component={MyActivities} />
                  <Route exact path='/profile/myEvents'     component = {MyEvents}/>
                  <Route exact path='/profile/myTickets'    component = {MyTickets}/>
                  <Route exact path='/profile/favorite'     component = {MyFavorite}/>
                  <Route exact path='/profile/setting'      component = {MySetting}/>
                  <Route exact path='/profile/exit'         render={()=><div>exit</div>}/>
                  <Route exact path='/profile/*'            render={(props)=>{return(<Redirect to='/profile/edit' />)}}/>
                </Switch>
              </Col>
            </div>
          </Row>
        )

    }else{
      return(<div>not allowed this page</div>)
    }
  }
}
