import React from 'react';
import styles from "../css/main1.module.css"

const Main_1 = () => {
    return (
        <div className={styles.container}>
            <img src={process.env.PUBLIC_URL + '/imgs/main_img_1.png'} className={styles.logo} alt='img_1'></img>
            <div className={styles.article}>
                <h1>
                    혼자 앓았던 말 못할 고민,<br></br> 
                    문버디와 함께
                </h1>
                <span>
                    월경 케어도, 건강한 삶도 행복하게 이어갈 수 있도록.<br></br>
                    문버디의 진정성 있는 정보와 서비스 여러분에게 스스로가 <br></br>
                    지닌 빛깔을 발견하고 건강하게 지속하도록 도와주는 길라잡이가 되길 바라요.
                </span>
            </div>
        </div>
    );
};

export default Main_1;