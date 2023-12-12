import { styled } from "styled-components";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import axios from "axios";
const StyledButton = styled.div`
  background-color: #c7a2f8;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  padding: 35px 0px;
  border-radius: 10px;
  box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
  margin-bottom: 40px;
`;
const StyledJoin = styled.div`
  width: 976px;
  margin: 0 auto;
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  .logo {
    display: flex;
    justify-content: center;
    margin-top: 44px;
  }
  .logo img {
    width: 152px;
    height: 146px;
  }
  .input-box {
    display: flex;
    justify-content: center;
  }
  .input-box input {
    margin-top: 42px;
    /* height: 60px; */
    width: 100%;
    font-size: 24px;
    outline: none;
    border: 1px solid black;
    padding: 27px 22px;
    border-radius: 15px;
    box-shadow: 6px 6px 4px rgb(0, 0, 0, 0.25);
    border-color: none;
  }
  .etc {
    display: flex;
    align-items: center;
    margin-top: 19px;
    font-size: 20px;
    margin-bottom: 29px;
  }
  .etc input {
    margin-right: 1rem;
  }
  .bottom-section {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: rgb(0, 0, 0, 0.5);
    font-weight: 500;
    margin-top: 20px;
  }
  .etc2 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  .join {
    font-size: 40px;
    display: flex;
    justify-content: center;
    margin-top: 26px;
  }
  .joinBar {
    display: flex;
  }
  hr {
    width: 976px;
    border-width: 0.5px;
    border-color: black;
    text-align: center;
    margin-bottom: 68px;
  }
  .join {
    margin-bottom: 75px;
  }
  .name {
    width: 160px;
    margin-bottom: 24px;
    font-size: 24px;
    font-weight: bold;
  }
  .content {
    display: flex;
    font-size: 24px;
    margin-bottom: 24px;
  }
  .content input {
    width: 700px;
    border: none;
    border-color: pink;
    outline: none;
  }
  .typeFont {
    font-size: 16px;
    padding: 12px;
  }
  .bowl {
    width: 150px;
    height: 150px;
    border: 4px solid #998ff3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    margin-left: 10px;
    input {
      outline: none;
    }
  }
  .weightBowl {
    display: flex;
    padding: 10px;
    margin-bottom: 30px;
    justify-content: space-between;
  }
  .inputClass {
    display: flex;
    width: 100px;
    height: 20px;
    border: 2px solid #998ff3;
    border-color: #998ff3;
    margin-top: 10px;
  }
  .explain {
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding: 10px;
  }
`;

export default function ModifyRate() {
  //   const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [nickName, setNickName] = useState("");
  const [absorb, setAbsorb] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);
  const [safety, setSafety] = useState(0);
  const [price, setPrice] = useState(0);
  const [isError, setIsError] = useState(false);

  const handleAbsorbChange = (e) => {
    setAbsorb(e.target.value);
  };
  const handleHumidityChange = (e) => {
    setHumidity(e.target.value);
  };
  const handleSatisfactionChange = (e) => {
    setSatisfaction(e.target.value);
  };
  const handleSafetyChange = (e) => {
    setSafety(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const SignUpBtn = () => {
    if (pw !== pwConfirm) {
      setIsError(true);
    } else {
      // 여기에 비밀번호가 일치할 때의 로직을 추가할 수 있습니다.
      // 예: 회원가입 요청 등
      console.log("비밀번호 일치");
      axios
        .post("https://api.domarketdodo.shop/user/update", {
          criterionDTO: {
            absorb: absorb,
            humidity: humidity,
            satisfaction: satisfaction,
            safety: safety,
            price: price,
          },
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {
          console.error("Error:", error.response.data.message);
          alert(error.response.data.message);
        });
    }
  }; // api.get 자체가 동기코드

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />

      <StyledJoin>
        <div>
          <div className={"join"}>문버디스코어 수정</div>

          <div className="explain">총합 100점 만점으로 입력해주세요 </div>
          <div className={"joinCompo"}>
            <div className={"weightBowl"}>
              <div className="bowl">
                <div className="weightTitle">흡수성능</div>
                <input
                  className="inputClass"
                  type="number"
                  value={absorb}
                  onChange={handleAbsorbChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">내부습도</div>
                <input
                  className="inputClass"
                  type="number"
                  value={humidity}
                  onChange={handleHumidityChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">소비자만족도</div>
                <input
                  className="inputClass"
                  type="number"
                  value={satisfaction}
                  onChange={handleSatisfactionChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">안정성</div>
                <input
                  className="inputClass"
                  type="number"
                  value={safety}
                  onChange={handleSafetyChange}
                ></input>
              </div>
              <div className="bowl">
                <div className="weightTitle">가격</div>
                <input
                  className="inputClass"
                  type="number"
                  value={price}
                  onChange={handlePriceChange}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <StyledButton onClick={SignUpBtn}>수정하기</StyledButton>
      </StyledJoin>
    </div>
  );
}
