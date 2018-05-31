import * as React from 'react';

const styles = require('./home.css');


const FEED_LIST = [
    {title:'古典音乐奇幻之旅：10分钟听懂古典乐', 'preface':'孤独的人都是在音乐中寻找自己的。', author:"豆瓣时间", image:'https://qnmob3.doubanio.com/img/files/file-1527695051.jpeg?imageView2/2/q/80/w/330/h/330/format/jpg'},
    {title:'中国90后已经没有性生活了', author:"土逗公社", image:'https://img3.doubanio.com/view/note/sqs/public/p50751034.jpg', 'preface':'无性且单身5年以上的比例高达30% “无性症候群”，日本媒体发明了这个词来形容当下的年轻人对于亲密关系和性生活愈发失去兴趣，独身人口日益增加。 与“性产业”发达的国家形象相反，大部分的日本年轻人是没有性生活的。2013日本生育规划委员会一项关于适龄男女的性交意向调查表明，在16-24岁 的女性中，有45%“不感兴趣或者厌恶性接触”。超过四分之一的男性有同样的感觉。 接受调查的18-34岁的年轻人中，有43%从未有过性生活。未满 30岁的更有1/3未试过约会。多数参与者们表达他...'},
    {title:'“对不起，二三本的学生我们公司不要”', author:"浪潮工作室", image:'https://img3.doubanio.com/view/note/sqs/public/p50389050.jpg', 'preface':'撰文 | 伍陆琪 出品 |网易浪潮工作室 翻开一本古早的《新华字典》，能读到这样一句话：“张华考上了北京大学；李萍进了中等技术学校；我在百货公司当售货员：我们都有光明的前途。” 这句话的作者姓甚名谁已不可考，但他绝没一语成谶。如今，面对北京大学热门专业毕业生动辄年薪三四十万的工作，中等技术学校的学生只能落得哀叹：热闹是他们的，我什么都没有。 这就是残酷的现实。高大明亮的写字楼中，衣着光鲜亮丽者，究其出处，鲜有名字不出众的学校。难道非顶尖名校的学生中，就...'}
]

interface FeedItemProps{
    title:string,
    preface:string,
    image:string,
    author:string
}

class FeedItem extends React.Component<FeedItemProps, any>{
    render(){
        return(
            <a className={styles.feed_item}>
                <div className={styles.feed_content}>
                    <div className={styles.feed_cover} style={{background: 'url("'+this.props.image+'") center center / cover no-repeat rgb(250, 250, 250)'}}>
                        <div style={{paddingTop: "100%"}}></div>
                    </div>
                    <h3>{this.props.title}</h3>
                    <p>{this.props.preface}</p>
                </div>
                <div className={styles.author}>
                    <span className={styles.author_name}>{this.props.author}</span>
                </div>
                <span className={styles.feed_label}></span>
            </a>
        )
    }
}

export default class HomeHot extends React.Component<any, any>{
    render(){
        return(
            <section className={styles.hot_block}>
                <div className={styles.section_title}>今日推荐 ></div>
                <div className={styles.feed_section}>
                    {
                        FEED_LIST.map((item, index)=>
                            <FeedItem {...item} key={index}/>
                        )
                    }
                </div>
            </section>
        )
    }
}