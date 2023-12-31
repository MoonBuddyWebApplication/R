import { useNavigate, useParams } from "react-router-dom";
import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import Navigator1 from "../components/Main-js/Navitgator1";
import { Link } from "react-router-dom";
import { useState } from "react";
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
      width: 420px;
      height: 400px;
      border-radius: 15px;
    }
    .divSector {
      padding: 10px;
    }
  `;
  const gotoDetail = useNavigate();
  const newsData = [
    {
      title: "세계 월경의 날: 월경에 대한 5가지 오해",
      summary: "김 섭",
      date: "2019-05-28",
      image: "imgs/News1.png",
      popularity: "90",
    },
    {
      title: "‘욱씬욱씬 생리통’ 가만히 둬도 괜찮을까?",
      summary: "손락훈",
      date: "2023-05-24",
      image: "imgs/News2.png",
      popularity: "80",
    },
    {
      title: "피임약: 피임약의 이상한 진실",
      summary: "Zaria Gorvett",
      date: "2018-09-02",
      image: "imgs/News3.png",
      popularity: "100",
    },
  ];
  const [sortBy, setSortBy] = useState("popular"); // 'popular'이 기본 정렬

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };
  const sortedByDate = [...newsData].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
  const { id } = useParams();

  console.log(id);
  return (
    <Container>
      <Navigator1 />
      <NavigatorMain />
      <LittleNav>
        <div style={{ display: "flex" }}>
          <OrderBtn onClick={() => handleSort("date")}>최신순</OrderBtn>
          <div> | </div>
          <OrderBtn onClick={() => handleSort("popular")}>인기순</OrderBtn>
        </div>
      </LittleNav>
      <Main>
        <Sector>
          {sortBy === "popular" && newsData.map((news, index) => (
            <ImgBox>
              <Link to={`/news/${index + 1}`} key={index}>
                <img src={news.image} alt="img" />
              </Link>

              <div className="divSector">
                <div style={{ fontSize: "33px" }}>{news.title}</div>
                <div style={{ fontSize: "24px", marginTop: "9px" }}>
                  {news.summary}
                </div>
                <div style={{ fontSize: "18px", marginTop: "9px" }}>
                  {news.date}
                </div>
              </div>
            </ImgBox>
          ))}
          {sortBy === "date" && sortedByDate.map((news, index) => (
            <ImgBox>
              <Link to={`/news/${index + 1}`} key={index}>
                <img src={news.image} alt="img" />
              </Link>

              <div className="divSector">
                <div style={{ fontSize: "33px" }}>{news.title}</div>
                <div style={{ fontSize: "24px", marginTop: "9px" }}>
                  {news.summary}
                </div>
                <div style={{ fontSize: "18px", marginTop: "9px" }}>
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
