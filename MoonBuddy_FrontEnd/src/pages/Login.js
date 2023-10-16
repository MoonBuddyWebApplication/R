import styled from "styled-components";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
export default function Login() {
  const IdandPwDiv = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
    margin: auto;
    display: flex;

    flex-direction: column;
    width: 580px;
    height: 120px;
  `;
  const IdandPwInput = styled.div`
    border: solid 0.2em;
    background-color: white;
    border-radius: 10px;
    border-color: #b6a3e3;
    width: 580px;
    height: 72px;
    margin-top: 4px;
  `;
  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <IdandPwDiv style={{ marginTop: "122.66px", marginBottom: "42px" }}>
        <div
          style={{
            justifyContent: "flex-start",
            fontSize: "32px",
            color: "#330075",
          }}
        >
          아이디
        </div>
        <IdandPwInput />
      </IdandPwDiv>
      <IdandPwDiv>
        <div
          style={{
            justifyContent: "flex-start",
            fontSize: "32px",
            color: "#330075",
          }}
        >
          비밀번호
        </div>
        <IdandPwInput />
      </IdandPwDiv>
    </div>
  );
}
