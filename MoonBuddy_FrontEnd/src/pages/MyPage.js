import React from "react";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import { CgProfile, CgHeart, CgPen } from "react-icons/cg";
import { Link } from "react-router-dom";
import styled from "styled-components";
const MyPage = () => {
  const StyledDiv = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 1000px;
    .myProfile {
      font-size: 40px;
      margin-top: 150px;
      width: 600px;
      margin-bottom: 40px;
    }
    .Area {
      display: flex;
      flex-direction: row;
    }
    .rightArea {
      display: flex;
      justify-content: space-between;
      margin-left: 100px;
      width: 800px;
    }
    a button {
      border: none;
      border-radius: 10px;
      background-color: #dad0f0;
      width: 277px;
      height: 64px;
      cursor: pointer;
      margin-top: 50px;
      font-size: 20px;
    }
    .btnArea {
      margin-top: -80px;
      display: flex;
      flex-direction: column;
    }
  `;
  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <StyledDiv>
        <div className="myProfile">내 프로필</div>
        <div className="Area">
          <div className="leftArea">
            <img src="imgs/profile.png" style={{ width: "173px" }}></img>
          </div>
          <div className="rightArea">
            <div>
              <h1 style={{ fontSize: "40px" }}>닉네임</h1>
              <h2 style={{ fontSize: "24px" }}>아이디</h2>
              <h2 style={{ fontSize: "24px" }}>이름</h2>
            </div>
            <div className="btnArea">
              <Link to="/modifyme">
                <button type="button">
                  회원정보 수정
                  <CgPen />
                </button>
              </Link>
              <Link to="/modifyrate">
                <button type="button">
                  가중치 수정
                  <CgPen />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </StyledDiv>
    </div>
  );
};

export default MyPage;
