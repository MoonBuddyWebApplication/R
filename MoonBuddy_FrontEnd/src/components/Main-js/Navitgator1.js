import React from "react";
import styled from "styled-components";
import "normalize.css";
import { Link } from "react-router-dom";

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
`;

const Navigator1 = () => {
  return (
    <PurpledStyledNav>
      <Link to="/login">로그인 |</Link>
      <Link to="/signup">회원가입 |</Link>
      <Link to="/mypage">마이페이지</Link>
    </PurpledStyledNav>
  );
};

export default Navigator1;
