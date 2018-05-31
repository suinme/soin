import * as React from 'react';
import {render} from 'react-dom';
import {
    HashRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import HomeTop from './part/HomeTop/index';
import HomeBottom from './part/HomeBottom/index';
import HomePage from './page/Home/index';
import ExplorePage from './page/Explore/index';


const SoinApp = (props:any)=> (
    <Router>
        <div>
            <HomeTop />
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/explore" component={ExplorePage}/>
            <HomeBottom />  
        </div>
  </Router>
)

render(
    <SoinApp />,
    document.getElementById('root')
)