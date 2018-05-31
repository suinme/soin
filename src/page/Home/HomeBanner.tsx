import * as React from 'react';

const styles = require('./home.css');

interface BannerItemProps{
    href:string,
    src: string
}

const BANNER = [
    {href:"https://m.douban.com/page/6gx6rb5", src:"https://img3.doubanio.com/img/files/file-1518324854.png"},
    {href:'https://m.douban.com/page/texjh3s', src:'https://img1.doubanio.com/img/files/file-1518084317.png'},
    {href:'https://m.douban.com/page/seojl7v', src:'https://img1.doubanio.com/img/files/file-1517911247.png'}
]


class BannerItem extends React.Component<BannerItemProps, any>{
    render(){
        return(
            <a href={this.props.href} className={styles.item}>
                <img src={this.props.src} alt="" />
            </a>
        )
    }
}

    
export default class HomeBanner extends React.Component<any, any>{
    render(){
        return(
            <section className={styles.mixed_banner} >
                {
                    BANNER.map((item, index)=>
                        <BannerItem href={item.href} src={item.src} key={index}/>
                    )
                }
            </section>
        )
    }
}