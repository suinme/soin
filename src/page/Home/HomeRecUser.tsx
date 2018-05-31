import * as React from 'react';

const styles = require('./home.css');

//style={{backgroundImage: 'url("https://qnmob3.doubanio.com/view/user_profile_banner/large/public/5171a3d694f3af3.jpg?imageView2/0/q/80/w/640/h/640/format/jpg")'}}

/**
 * 推荐用户,每天只有一位
 */
export default class HomeRecUser extends React.Component<any, any>{
    render(){
        return(
            <section className={styles.rec_user} > 
                <div className={styles.section_title}>精选用户 ></div>
                <div className={styles.bd}>
                    <img src="https://img3.doubanio.com/icon/ul161989800-1.jpg" />
                    <div className={styles.detail}>
                        <div className={styles.basic_info}>
                            <span className={styles.uname}>渐</span>
                            <span className={styles.uid}>星标用户❤</span>
                            <a href="/people/161989800">个人主页</a>
                        </div>
                        <div className={styles.relationship}>
                            <span className={styles.info}>关注 9</span>
                            <span className={styles.info}>信任值 95</span>
                            <span className={styles.info}>评分 93</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}