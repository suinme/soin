import * as React from 'react';

//import * as styles from './home-top.css'
const styles = require('./home-top.css')

export default class HomeTop extends React.Component<any, any>{
    render(){
        return(
            <div className={styles.m_hometop}>
                <div className={styles.topfix} >
                    <h1 className={styles.topfl} >
                        Soin
                    </h1>
                   
                </div>
            </div>
        )
    }
}