import * as React from 'react';
import {Link} from 'react-router-dom'

const styles = require('./explore.css');

interface TopicItemProps{
    avatar:string,
    author:string,
    title:string,
    image?:string,
    tid:string,
    uid:string,
    time:string,
    reply:number
}

const TOPIC_LIST = [
    {uid:'171039889', tid:'117815056',author:'不早睡就是狗', reply:182, time:'05-31 19:32',avatar:'https://img3.doubanio.com/icon/u171039889-14.jpg', title:'推荐几首歌我听', image:'https://img3.doubanio.com/view/group_topic/small/public/p119848382.webp'},
    {uid:'171039889', tid:'117815056',author:'不是小老虎', reply:70, time:'06-01 10:01',avatar:'https://img3.doubanio.com/icon/u43250405-23.jpg', title:'工作太无聊 感觉有抑郁倾向', image:'https://img3.doubanio.com/view/group_topic/small/public/p120225522.webp'},
    {uid:'171039889', tid:'117815056',author:'はる', reply:93, time:'06-01 14:10',avatar:'https://img3.doubanio.com/icon/u82680283-6.jpg', title:'男友家的房子应该要男友出钱装修吗？'},
    {uid:'171039889', tid:'117815056',author:'Ruo', reply:16, time:'06-01 14:09',avatar:'https://img3.doubanio.com/icon/u92452762-21.jpg', title:'狮子男对水瓶女是什么感觉？', image:"https://img3.doubanio.com/view/group_topic/small/public/p120362800.webp"},
    {uid:'171039889', tid:'117815056',author:'不早睡就是狗', reply:182, time:'05-31 19:32',avatar:'https://img3.doubanio.com/icon/u171039889-14.jpg', title:'推荐几首歌我听', image:'https://img3.doubanio.com/view/group_topic/small/public/p119848382.webp'},
    {uid:'171039889', tid:'117815056',author:'不是小老虎', reply:70, time:'06-01 10:01',avatar:'https://img3.doubanio.com/icon/u43250405-23.jpg', title:'工作太无聊 感觉有抑郁倾向', image:'https://img3.doubanio.com/view/group_topic/small/public/p120225522.webp'},
    {uid:'171039889', tid:'117815056',author:'はる', reply:93, time:'06-01 14:10',avatar:'https://img3.doubanio.com/icon/u82680283-6.jpg', title:'男友家的房子应该要男友出钱装修吗？'},
]

class TopicItem extends React.Component<TopicItemProps, any>{
    render(){
        const className = this.props.image ? styles.has_pic : "";
        return(
            <li>
                <Link to={`/group/topic/${this.props.tid}/`} title="推荐几首歌我听">
                    <h3 className={className}>
                        {this.props.title}
                        { this. props.image && (
                            <div className={styles.topic_cover}>
                                <img src={this.props.image} alt="推荐几首歌我听" />
                            </div>
                        )}
                        <div style={{paddingTop:'5px'}}>
                            <Link to={`/people/${this.props.uid}/`}>
                                <img className={styles.user_avatar} src={this.props.avatar} alt="不早睡就是狗-Avatar" />
                                <label className={styles.topic_author}>{this.props.author}</label>
                            </Link>
                        </div>
                    </h3>
                    <div className={styles.topic_info}>
                        <span className={styles.left}>{this.props.reply}回应</span>
                        <span className={styles.right}>{this.props.time}</span>
                    </div>
                </Link>
            </li>
        )
    }
}

export default class ExploreTopic extends React.Component<any, any>{
    render(){
        return(
            <div className={styles.section}>
                <div className={styles.section_hd}>
                    <h2>
                        <span className={styles.section_title}></span>
                    </h2>
                    <div className={styles.section_tabs}>
                        <div className={styles.tabs_list}>
                            <Link className={styles.on} to="events/week-music">
                                <span>最新</span>
                            </Link>
                            <Link to="events/week-1001">
                                <span>最热</span>
                            </Link>
                            <a href="events/week-1002">
                                <span>同城</span>
                            </a>
                            <a href="events/week-1003" >
                                <span>好玩</span>
                            </a>
                            <a href="events/week-1003" >
                                <span>交易</span>
                            </a>
                            <a href="events/week-music">更多»</a>
                        </div>
                        </div>
                </div>
                <div className={styles.section_bd}>
                    <ul className={styles.topic_list}>
                        {
                            TOPIC_LIST.map((item, index)=>
                                <TopicItem {...item} key={index}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}