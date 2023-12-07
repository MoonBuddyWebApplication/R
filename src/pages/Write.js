import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
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
  .user {
    font-size: 20px;
  }
  .title {
    font-size: 40px;
    width: 1320px;

    input {
      outline: none;
      border-color: white;
      width: 100%;
      border: none;
    }
  }
  .middleSector {
    display: flex;
    justify-content: flex-start;
    input {
      outline: none;
      overflow: hidden;
      border-color: white;
      border: none;
      width: 1320px;
      height: 500px;
    }
  }
`;
const LoginBtn = styled.button`
  background-color: #998ff8;
  border-radius: 10px;
  border: none;
  width: 407px;
  height: 83px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  box-shadow: 2px 2px 2px 2px #c1c0fa;
`;
const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
export default function Write() {
  const date = "2023.11.02";

  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <Container>
        <div className="firstSector">
          <div className="title">
            <input
              type="text"
              placeholder="제목을 입력해주세요"
              value={title}
              onChange={handleTitleChange}
            ></input>
            <div className="user">유저 닉네임</div>
          </div>

          <div className="date">{date}</div>
        </div>
        <hr />
        <div className="middleSector">
          <div className="content">
            <input
              id="content"
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={handleContentChange}
            />
          </div>
        </div>
        <hr />
        <BtnDiv>
          <LoginBtn>글 등록하기</LoginBtn>
        </BtnDiv>
      </Container>
    </div>
  );
}