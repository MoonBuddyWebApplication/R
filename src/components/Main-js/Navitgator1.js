import React from "react";
import styled from "styled-components";
import "normalize.css";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
const PurpledStyledNav = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  background-color: #998ff3;
  font-weight: 28px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: beige;
  a {
    color: white;
    margin-right: 0.5rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
    color: white;
  }
`;

const Navigator1 = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  console.log(document.cookie);

  // "access_token"이 비어있는지 여부 확인
  const isAccessTokenEmpty = !cookies.access_token;
  const handleLogout = () => {
    // 로그아웃 버튼을 누르면 실행되는 함수
    removeCookie("access_token", { domain: "domarketdodo.shop" });
    removeCookie("JSESSIONID", { domain: "api.domarketdodo.shop" });
    window.location.href = "/"; // 현재url을 변경해준다.
  };

  return (
    <PurpledStyledNav>
      {isAccessTokenEmpty ? (
        // "access_token"이 비어있을 때에만 로그인 및 회원가입 링크 표시
        <>
          <Link to="/login">로그인 |</Link>
          <Link to="/signup">회원가입 |</Link>
        </>
      ) : (
        // "access_token"이 비어있지 않을 때 로그아웃 링크 표시
        <>
          <button onClick={handleLogout}>로그아웃 |</button>
          <Link to="/mypage">마이페이지</Link>
        </>
      )}
    </PurpledStyledNav>
  );
};

export default Navigator1;
