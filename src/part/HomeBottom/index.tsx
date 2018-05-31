import * as React from 'react';
import {Link} from 'react-router-dom'

//import * as styles from './home-top.css'
const styles = require('./home-bottom.css')

const NAV_LIST = [
    {name:'首页', selected:true, to:"/"},
    {name:'对话', selected:false, to:"/chat"},
    {name:'发现', selected:false, to:"/explore"},
    {name:'账号', selected:false, to:"/account"},
]

interface NavItemProps{
    selected:boolean,
    name:string
    to:string
}

class NavItem extends React.Component<NavItemProps, any>{
    render(){
        // hash router, browser router should use location.pathname
        const className = location.hash=="#"+this.props.to ? styles.tab_selected : styles.tabtitle;
        return(
            
            <li className={className} >
                <Link to={this.props.to}>
                <div className={styles.tabtxt}>
                    <span>{this.props.name}</span>
                </div>
                </Link>
            </li>
            
        )
    }
}

export default class HomeBottom extends React.Component<any, any>{
    render(){
        return(
            <div className={styles.m_homebottom}>
                <div className={styles.bottomfix} >
                    <nav className={styles.nav_tab}>
                        {
                            NAV_LIST.map((item, index)=>
                                <NavItem {...item} key={index}/>
                            )
                        }
                    </nav>
                </div>
            </div>
        )
    }
}