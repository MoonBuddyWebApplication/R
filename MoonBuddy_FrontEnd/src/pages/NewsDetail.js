import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
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
        <div className="middleSector">
          <div className="sectorWord">
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, etus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquentt mi
            in purus lobortis eleifend. Sed nec ante dictum sem condimentum
            ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
            posuere leo. tempor laoreet, nibh elit sollicitudin felis, eget
            feugiat sapien diam n ec nisl. Aenean gravida turpis nisi, consequat
            dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor
            suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus.
            Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut
            arcu feugiat maximus. Mau ris consequat tellus id tempus aliquet.
            Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, etus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquentt mi
            in purus lobortis eleifend. Sed nec ante dictum sem condimentum
            ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac
            posuere leo. tempor laoreet, nibh elit sollicitudin felis, eget
            feugiat sapien diam n ec nisl. Aenean gravida turpis nisi, consequat
            dictum risus dapibus Forem ipsum dolor sit amet, consectetur
            adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, etus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
            condimentum velit, sit amet feugiat lectus. Class aptent taciti
            sociosqu ad litora torquentt mi in purus lobortis eleifend. Sed nec
            ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin
            vitae facilisis nisi, ac posuere leo. tempor laoreet, nibh elit
            sollicitudin felis, eget feugiat sapien diam n ec nisl. Aenean
            gravida turpis nisi, consequat dictum risus dapibus a. Duis felis
            ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper
            gravida sem sit amet cursus. Etiam pulvinar purus vitae justo
            pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mau ris
            consequat tellus id tempus aliquet. Forem ipsum dolor sit amet,
            consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            mattis tellus. Sed dignissim, etus nec fringilla accumsan, risus sem
            sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
            condimentum velit, sit amet feugiat lectus. Class aptent taciti
            sociosqu ad litora torquentt mi in purus lobortis eleifend. Sed nec
            ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin
            vitae facilisis nisi, ac posuere leo. tempor laoreet, nibh elit
            sollicitudin felis, eget feugiat sapien diam n ec nisl. Aenean
            gravida turpis nisi, consequat dictum ris
          </div>
          <div className="sectorImg">
            <img src="imgs/sample.png" alt="hello"></img>
            <img src="imgs/sample.png" alt="hello"></img>
          </div>
        </div>
      </Container>
    </div>
  );
}
