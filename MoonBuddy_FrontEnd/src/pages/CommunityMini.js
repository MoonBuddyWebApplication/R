import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";

export default function CommunityMini({ props }) {
  const Container = styled.div`
    width: 1300px;
    margin: auto;
    display: flex;
    flex-direction: column;
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
  `;
  const TitleCom = styled.div`
    margin-top: 71px;
    div {
      padding: 3px;
    }
    .category {
      font-size: 24px;
      color: #998ff3;
    }
    .title {
      font-size: 40px;
      font-weight: bold;
    }
    .nickDiv {
      display: flex;
      justify-content: space-between;
      div {
        font-size: 20px;
      }
    }
  `;
  const Sector = styled.div`
    display: flex;
    flex-direction: column; /* 세로로 쌓이도록 설정 */
    padding: 20px;
    font-size: 24px;
    .sector {
      height: 380px;
      padding: 20px;
    }

    hr {
      color: black;
      margin: 10px 0; /* 원하는 간격으로 조절 */
    }
  `;
  const date = "2023.10.31";
  return (
    <Container>
      <NavigatorMain />
      <TitleCom>
        <div className="category">[자유]</div>
        <div className="title">생리대 추천 좀요~</div>

        <div className="nickDiv">
          <div>쇼미더머니</div>
          <div>{date}</div>
        </div>
      </TitleCom>
      <Sector>
        <hr />
        <div className="sector"> 좋은 느낌 밖에 몰라요 ㅜ</div>
        <hr />
      </Sector>
    </Container>
  );
}
