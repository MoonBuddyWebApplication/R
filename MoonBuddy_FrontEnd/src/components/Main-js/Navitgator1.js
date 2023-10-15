import React from "react";
import styled from "styled-components";
import "normalize.css";
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
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: flex-end; /* 가로 정렬을 오른쪽으로 설정 */
  color: beige;
`;
const Link = styled.a`
  color: white;
  margin-right: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Navitgator1 = () => {
  return (
    <PurpledStyledNav>
      <Link href="#">로그인 |</Link>
      <Link href="#">회원가입 |</Link>
      <Link href="#">마이페이지 |</Link>
      <Link href="#">언어설정</Link>
    </PurpledStyledNav>
  );
};

export default Navitgator1;
