import React from "react";
import NavigatorMain from "../Main-js/Navigator_main";
import Navitgator1 from "../Main-js/Navitgator1";
import style from "../css/MyPage.module.css";
import { CgProfile, CgHeart, CgPen } from "react-icons/cg";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <div className={style.Container}>
        <div className={style.LeftArea}>
          <h1 className={style.title}>내 프로필</h1>
          <div className={style.MYprofile}>
            <img src="imgs/profile.png" style={{ width: "173px" }}></img>
            <h1 style={{ fontSize: "40px" }}>랜덤닉네임</h1>
            <h2 style={{ fontSize: "24px" }}>아이디</h2>
            <h2 style={{ fontSize: "24px" }}>이름</h2>
          </div>
        </div>
        <div>
          <Link to="/modifyme">
            <button type="button" className={style.btn_mypost}>
              회원정보 수정
              <CgPen />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
