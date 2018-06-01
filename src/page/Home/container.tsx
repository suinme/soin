import * as React from 'react';

import HomeBanner from './HomeBanner';
import HomeRecUser from './HomeRecUser';
import HomeHot from './HomeHot';
import HomeExploreQueue from './HomeExploreQueue';

const styles = require('./home.css');

export default class HomePage extends React.Component<any, any>{
    render(){
        return(
            <div className={styles.group_home}>
                <HomeBanner />
                <HomeRecUser />
                <HomeHot />
                <HomeExploreQueue />
            </div>
        )
    }
}