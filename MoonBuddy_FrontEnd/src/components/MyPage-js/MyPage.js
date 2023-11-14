import React from 'react';
import NavigatorMain from "../Main-js/Navigator_main";
import Navitgator1 from "../Main-js/Navitgator1";
import style from "../css/MyPage.module.css";
import { CgProfile, CgHeart, CgPen } from "react-icons/cg";

const MyPage = () => {
    return (
        <div>
            <Navitgator1 />
            <NavigatorMain />
            <div className={style.Container}>
                <div className={style.LeftArea}>
                    <h1 className={style.title}>내 프로필</h1>
                    <div className={style.MYprofile}>
                        <CgProfile backgroundcolor='#B6A3E3' />
                        <h1>랜덤닉네임</h1>
                        <h2>아이디</h2>
                        <h2>이름</h2>
                    </div>
                </div>
                <div className={style.RightArea}>
                    <button type='button' className={style.btn_Like}>찜목록<CgHeart /></button>
                    <button type='button' className={style.btn_mypost}><CgPen /></button>
                </div>
            </div>
        </div>
    );
};

export default MyPage;