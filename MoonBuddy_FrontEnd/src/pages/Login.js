import React from "react";
import styled from "styled-components";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import { Link } from "react-router-dom";
import { login } from "../components/Api/api";

const IdandPwDiv = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 580px;
  height: 800px;
`;
const IdRem = styled.label`
  display: flex;
  justify-content: space-between;
  margin-top: 41px;
`;
const IdandPwInput = styled.div`
  border: solid 0.2em;
  background-color: white;
  border-radius: 10px;
  border-color: #b6a3e3;
  width: 580px;
  height: 72px;
  margin-top: 4px;
`;
const LoginBtn = styled.button`
  background-color: #c1c0fa;
  border-radius: 10px;
  border: none;
  width: 407px;
  height: 83px;
`;
const Finder = styled.div`
  text-decoration: none;
  align-items: center;
  justify-content: center;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Login() {
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await login();
  //       console.log("응답 데이터:", response.data);
  //       // 로그인 성공 후 필요한 작업 수행
  //     } catch (error) {
  //       // 에러 처리
  //       // console.error("로그인 실패:", error);
  //       console.error("에러 발생:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <IdandPwDiv style={{ marginTop: "122.66px", marginBottom: "42px" }}>
        <div
          style={{
            justifyContent: "flex-start",
            fontSize: "32px",
            color: "#330075",
          }}
        >
          아이디
        </div>
        <IdandPwInput />
        {/*아이디창*/}
        <div
          style={{
            justifyContent: "flex-start",
            fontSize: "32px",
            color: "#330075",
            marginTop: "90px",
          }}
        >
          비밀번호
        </div>
        <IdandPwInput />
        {/*비밀번호창*/}
        <IdRem>
          <div>
            <input
              type="checkbox"
              id="remember-check"
              style={{ width: "34px", height: "34px" }}
            ></input>
            자동로그인
          </div>
          <Finder>
            <Link to="/login">아이디 찾기 |</Link>
            <Link to="/signup">비밀번호 찾기</Link>
          </Finder>
        </IdRem>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "86px",
          }}
        >
          <LoginBtn>로그인</LoginBtn>
        </div>
      </IdandPwDiv>
    </div>
  );
}
