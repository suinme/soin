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
]

class TopicItem extends React.Component<TopicItemProps, any>{
    render(){
        return(
            <li>
                <Link to={`/people/${this.props.uid}/`}>
                    <img className={styles.user_avatar} src={this.props.avatar} alt="不早睡就是狗-Avatar" />
                </Link>
                <Link to={`/group/topic/${this.props.tid}/`} title="推荐几首歌我听">
                    <h3 className={styles.has_pic}>
                        {this.props.title}
                        <div className={styles.topic_cover}>
                            <img src={this.props.image} alt="推荐几首歌我听" />
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
                        <span className={styles.section_title}>话题</span>
                    </h2>
                </div>
                <div className={styles.section_bd}>
                    <ul className={styles.topic_list}>
                        {
                            TOPIC_LIST.map((item, index)=>
                                <TopicItem {...item}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}