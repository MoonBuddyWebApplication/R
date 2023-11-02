import { useNavigate } from "react-router-dom";
import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
export default function News() {
  const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
  `;
  const LittleNav = styled.div`
    margin: auto;
    width: 1320px;
    display: flex;
    justify-content: space-between;
    color: #b6a3e3;
  `;
  const OrderBtn = styled.button`
    /*styled component 쓸때 변수명 첫 글자 무조건 대문자 제발!*/
    border: none;
    cursor: pointer;
    background-color: white;
    color: #b6a3e3;
  `;
  const Main = styled.div`
    margin: auto;
    width: 1320px;
    margin-top: 64px;
  `;
  const Sector = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const ImgBox = styled.div`
    width: calc(33.33% - 20px); /* 3개씩 배치하기 위한 너비 조정 */
    margin-right: 20px; /* 오른쪽 간격 설정 */
    margin-bottom: 20px; /* 아래쪽 간격 설정 */
    img {
      width: 404px;
      height: 454px;
    }
    .divSector {
      padding: 10px;
    }
  `;
  const gotoDetail = useNavigate();
  const newsData = [
    {
      title: "기사 제목",
      summary: "호호",
      date: "2023-10-29",
      image: "imgs/NewsSample.png",
    },
    {
      title: "프론트엔드",
      summary: "인생은",
      date: "2023-10-29",
      image: "imgs/NewsSample.png",
    },
    {
      title: "이게맞냐?",
      summary: "달구나",
      date: "2023-10-29",
      image: "imgs/NewsSample.png",
    },

    // 추가 데이터 여따가
  ];
  return (
    <Container>
      <NavigatorMain />
      <LittleNav>
        <div style={{ display: "flex" }}>
          <OrderBtn>최신순</OrderBtn>
          <div> | </div>
          <OrderBtn>인기순</OrderBtn>
        </div>
      </LittleNav>
      <Main>
        <Sector>
          {newsData.map((news, index) => (
            <ImgBox>
              <img
                src={news.image}
                onClick={() => gotoDetail("/newsdetail")}
                alt="img"
              />
              <div className="divSector">
                <div style={{ fontSize: "48px" }}>{news.title}</div>
                <div style={{ fontSize: "32px", marginTop: "9px" }}>
                  {news.summary}
                </div>
                <div style={{ fontSize: "20px", marginTop: "9px" }}>
                  {news.date}
                </div>
              </div>
            </ImgBox>
          ))}
        </Sector>
      </Main>
    </Container>
  );
}
