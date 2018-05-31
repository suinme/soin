import * as React from 'react';

const styles = require('./home.css');


interface UserItemProps{
    href:string,
    src: string,
    name:string
}

const USER_LIST = [
    {href:"", src:"https://img3.doubanio.com/icon/up62730894-3.jpg", name:"意卿常常"},
    {href:'', src:'https://img3.doubanio.com/icon/up151606539-6.jpg', name:"四木"},
    {href:'', src:'https://img3.doubanio.com/icon/up85421490-3.jpg', name:"荷尔蒙君"},
    {href:'', src:'https://img3.doubanio.com/icon/up124987821-5.jpg', name:"兜Dong"},
    {href:'', src:'https://img1.doubanio.com/icon/up64038479-28.jpg', name:'洗澡狂魔腹小肌'},
    {href:'', src:'https://img3.doubanio.com/icon/up161939719-1.jpg', name:'舒然'},
    
]

class UserItem extends React.Component<UserItemProps, any>{
    render(){
        return(
            <div className={styles.avatar}>
                <img src={this.props.src} alt="" />
            </div>
        )
    }
}

export default class HomeExploreQueue extends React.Component<any, any>{
    render(){
        return(
            <section className={styles.explore_queue}>
                <div className={styles.section_title}>探索队列 ></div>
                <div className={styles.mixed_user_avatars}>
                    {
                        USER_LIST.map((item, index)=>
                            <UserItem href={item.href} src={item.src} name={item.name} key={index}/>
                        )
                    }
                </div>
            </section>
        )
    }
}