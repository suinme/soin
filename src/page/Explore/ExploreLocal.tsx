import * as React from 'react';

const styles = require('./explore.css');


class EventItem extends React.Component<any, any>{
    render(){
        return(
            <div></div>
        )
    }
}

export default class ExploreLocal extends React.Component<any, any>{
    render(){
        return(
            <div className={styles.section}>
                <div className={styles.section_hd}>
                    <h2>
                        <span className={styles.section_title}>同城</span>
                    </h2>
                </div>
                <div className={styles.section_bd}>
                </div>
            </div>
        )
    }
}