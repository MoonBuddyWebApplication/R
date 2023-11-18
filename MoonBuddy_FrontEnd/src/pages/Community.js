import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import ChatComponent from "../components/Com-js/ChatComponent";
import { boardGet } from "../components/Api/api";
import { useState, useEffect } from "react";
import Navigator1 from "../components/Main-js/Navitgator1";
export default function Community() {
  const [res, setRes] = useState();
  const LittleNav = styled.div`
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
      {res?.data.map((idx) => (
        <ChatComponent props={idx} />
      ))}
    </div>
  );
}
