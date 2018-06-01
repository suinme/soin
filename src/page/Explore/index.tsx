import * as React from 'react';

import ExploreTopic from './ExploreTopic';
import ExploreLocal from './ExploreLocal';

const styles = require('./explore.css');

export default class ExplorePage extends React.Component<any, any>{
    render(){
        return(
            <div>
                <ExploreTopic />
            </div>
        )
    }
}