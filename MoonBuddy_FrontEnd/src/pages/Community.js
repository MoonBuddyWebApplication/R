import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import ChatComponent from "../components/Com-js/ChatComponent";
export default function Community() {
  const LittleNav = styled.div`
    margin: auto;
    width: 1320px;
    display: flex;
    justify-content: space-between;
    color: #b6a3e3;
  `;
  const arrayLen = 350;
  const OrderBtn = styled.button`
    /*styled component 쓸때 변수명 첫 글자 무조건 대문자 제발!*/
    border: none;
    cursor: pointer;
    background-color: white;
    color: #b6a3e3;
  `;

  return (
    <div>
      <NavigatorMain />
      <LittleNav>
        <div style={{ display: "flex" }}>
          <OrderBtn>최신순</OrderBtn>
          <div> | </div>
          <OrderBtn>인기순</OrderBtn>
        </div>
        <div>{arrayLen}개의 게시물 </div>
      </LittleNav>
      <ChatComponent props="[ 질문 ]" />
      <ChatComponent props="[ 후기 ]" />
    </div>
  );
}
