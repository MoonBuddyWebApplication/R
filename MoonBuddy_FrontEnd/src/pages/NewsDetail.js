import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
import { useParams } from "react-router-dom";
export default function NewsDetail() {
  const Container = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
    width: 1320px;
    margin: auto;
    .firstSector {
      display: flex;
      justify-content: space-between;
      margin-top: 100px;
      padding: 10px;
    }
    .sectorWord {
      padding: 10px;
      font-size: 20px;
    }
    .title {
      font-size: 48px;
    }
    .middleSector {
      display: flex;
    }
    .sectorImg {
      display: flex;
      flex-direction: column;
      padding: 15px;
      img {
        width: 420px;
        height: 454px;
      }
    }
  `;
  const date = "2023.11.02";

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <Container>
        <div className="firstSector">
          <div className="title">기사제목</div>
          <div className="date">{date}</div>
        </div>
        <hr />
        {id === 1 ?  <div className="middleSector">
          <div className="sectorWord">
            F5월 28일은 세계 월경의 날로 여성의 월경이 평균 5일간 지속하고
            28일을 주기로 돌아온다는 의미가 담긴 날이다. 2014년에 독일에서 처음
            제정된 월경의 날은 그동안 월경에 대해 말조차 꺼내기 힘들었던
            분위기를 깨고 존중하는 공감대를 형성해보자는 취지로 만들어졌다.
            월경에 대한 인식이 많이 개선됐지만, 여전히 한국 사회에서 월경을
            월경이라라고 부르기가 쉽지만은 않다.
          </div> || null}
       
          <div className="sectorImg">
            <img src="imgs/sample.png" alt="hello"></img>
            <img src="imgs/sample.png" alt="hello"></img>
          </div>
        </div>
      </Container>
    </div>
  );
}
