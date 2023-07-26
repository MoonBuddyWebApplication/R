import React from 'react';
import styles from '../css//footer.module.css';
const Footer = () => {
    return (
        <footer>
            <p className={styles.text1}>
                <a href='' className={styles.links}>개인정보취급방침 | </a>
                <a href='' className={styles.links}>사이트 이용약관 | </a>
                <a href='' className={styles.links}>회원가입 | </a>
                <a href='' className={styles.links}>고객센터 | </a>
                <a href='' className={styles.links}>채용정보</a>
            </p>
            <p className={styles.text2}>
                사업자등록번호 : 000-000-0000   대표자 : xxx <br></br>
                서울특별시 00구 00동 xxx-xx<br></br>
                제휴 문의 : email@email.com<br></br>
            </p>
        </footer>
    );
};

export default Footer;