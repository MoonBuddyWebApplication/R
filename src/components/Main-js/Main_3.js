import React from 'react';
import styles from "../css/main3.module.css"
import Slider from '../Main-js/Slider';
const Main_3 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.with_button}>
                <p>
                    <h1>
                        보기만해도 어려운 성분,<br></br>
                        저희가 알려드릴게요.
                    </h1>
                    <span>
                        생소한 용어들, 많이 낯서시죠?<br></br>
                        문버디에서 약 25개 기업의 생리용품의<br></br>
                        성분을 소비자 입장에서 제공하고 있습니다.
                    </span>
                </p>
                <button>성분분석 보러가기</button>  {/*수정필요 링크!!*/}
            </div>
            <div className={styles.affiliates}>
                <div className={styles.images}> 
                    <Slider />
                </div>
                <div className={styles.affilitaes_text}>
                    <h1>
                        문버디와 함께하는 <br></br>업체들이에요.
                    </h1>
                    <p className={styles.texts}>
                        <a href=''>좋은느낌</a><br></br>
                        <a href=''>시크릿데이</a><br></br>
                        <a href=''>라네이처</a><br></br>
                        <a href=''>쏘피</a><br></br>
                        <a href=''>라본</a>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Main_3;