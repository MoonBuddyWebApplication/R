import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import ChatComponent from "../components/Com-js/ChatComponent";
import { boardGet } from "../components/Api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigator1 from "../components/Main-js/Navitgator1";
import Loading from "../components/Loading";

const LittleNav = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  margin: auto;
  width: 1320px;
  display: flex;
  justify-content: space-between;
  color: #b6a3e3;
  .firstDiv {
    display: flex;
  }
`;
const OrderBtn = styled.button`
  /*styled component 쓸때 변수명 첫 글자 무조건 대문자 제발!*/
  border: none;
  cursor: pointer;
  background-color: white;
  color: #b6a3e3;
`;
const LinkDiv = styled.div`
  a {
    text-decoration: none;
    color: black;
  }
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const LoginBtn = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  background-color: #998ff8;
  border-radius: 10px;
  border: none;
  width: 407px;
  height: 83px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  box-shadow: 2px 2px 2px 2px #c1c0fa;
`;

export default function Community() {
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await boardGet();
    setRes(response);
    console.log(res);
  };
  console.log(res);
  // const arrList = res?.data.map((idx) => <div key={idx.id}>{idx.title}</div>);

  // const arra = res?.data.data.map((titleDiv) => {
  //   <div>{titleDiv.title}</div>;
  // });
  const arrayLen = res?.data.length;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Navigator1 />
      <NavigatorMain />
      <LittleNav>
        <div className="firstDiv">
          <OrderBtn>최신순</OrderBtn>
          <div> | </div>
          <OrderBtn>인기순</OrderBtn>
        </div>
        <div>{arrayLen}개의 게시물 </div>
      </LittleNav>
      <LinkDiv>
        {res?.data.map((idx) => (
          <Link key={idx} to={`/com/${idx.boardId}`}>
            <ChatComponent props={idx} />
          </Link>
        ))}
      </LinkDiv>
      <BtnDiv>
        <Link to="/write">
          <LoginBtn>글 작성하러 가기</LoginBtn>
        </Link>
      </BtnDiv>
    </div>
  );
}
