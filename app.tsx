import * as React from 'react';
import {render} from 'react-dom';

import HomeTop from './src/part/HomeTop/index';
import HomeBottom from './src/part/HomeBottom/index';
import HomePage from './src/page/Home/index';

class App extends React.Component<any, any>{
    render(){
        return(
            <div>
                <HomeTop />
                <HomePage />
                <HomeBottom />
            </div>
        )
    }
}

render(
    <App />,
    document.getElementById('root')
)