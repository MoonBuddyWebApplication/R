import { styled } from "styled-components";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
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
`;
const StyledJoin = styled.div`
  width: 976px;
  margin: 0 auto;
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
`;

export default function Signup() {
  //   const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [pw, setPw] = useState("");
  const [userName, setUserName] = useState("");

  const [email, setEmail] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const handleIdChange = (e) => {
    setUserId(e.target.value);
  };
  const handlePwChange = (e) => {
    setPw(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhonenum(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const join = () => {
    const formData = new FormData();

    const user = {
      userId: userId,
      pw: pw,
      userName: userName,

      email: email,
    };
    formData.append(
      "user",
      new Blob([JSON.stringify(user)], { type: "application/json" })
    );
    console.log("user=>", user);

    console.log("formData=>", formData);

    // signUp(formData)
    //   .then((res) => {
    //     console.log(res.data);
    //     alert("회원가입에 성공했습니다.");
    //     navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.error("Error : ", error);
    //   });
  };

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />

      <StyledJoin>
        <div>
          <div className={"join"}>회원가입</div>

          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>이름</div>
              <div className={"content"}>
                <input
                  type="text"
                  placeholder="이름을 입력하세요"
                  value={userName}
                  onChange={handleUserNameChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>아이디</div>
              <div className={"content"}>
                <input
                  type="text"
                  placeholder="6~12자의 영문, 숫자만 사용 가능합니다"
                  value={userId}
                  onChange={handleIdChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>
          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>비밀번호</div>
              <div className={"content"}>
                <input
                  type="password"
                  placeholder="8~20자의 숫자, 특수문자, 영문자만 사용 가능합니다"
                  value={pw}
                  onChange={handlePwChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>

          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>전화번호</div>
              <div className={"content"}>
                <input
                  type="password"
                  placeholder="'-' 제외하고 입력해주세요"
                  value={phonenum}
                  onChange={handlePhoneChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>

          <div className={"joinCompo"}>
            <div className={"joinBar"}>
              <div className={"name"}>이메일</div>
              <div className={"content"}>
                <input
                  type="text"
                  placeholder="xxxx@.com의 형식으로 입력해주세요"
                  value={email}
                  onChange={handleEmailChange}
                ></input>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>

        <StyledButton onClick={join}>회원가입</StyledButton>
      </StyledJoin>
    </div>
  );
}
