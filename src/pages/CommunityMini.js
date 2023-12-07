import NavigatorMain from "../components/Main-js/Navigator_main";
import styled from "styled-components";
import { boardGet } from "../components/Api/api";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { boardGetOne } from "../components/Api/api";
const Container = styled.div`
  width: 1300px;
  margin: auto;
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
  font-family: "Aoboshi One", serif;
  font-family: "Gugi", cursive;
  font-family: "Noto Serif KR", serif;
  .replyInput {
    border: solid black;
    height: 200px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px;
    input {
      width: 90%;
      height: 50%;
      border: none;
      outline: none;
      font-size: 24px;
    }
  }
  .nick {
    display: flex;
    justify-content: flex-start;
  }
  .registerBtn {
    display: flex;
    justify-content: flex-end;
    button {
      background-color: #998ff3;
      border: none;
      border-radius: 15px;
      padding: 7px;
      width: 100px;
      font-size: 20px;
    }
  }
  .replyGet {
    border: solid black;
    height: fit-content;
    margin-bottom: 10px;
    font-size: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px;
  }
  .nickGet {
    font-size: 18px;
  }
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

export default function CommunityMini({}) {
  const [inputText, setText] = useState("");
  const [res, setRes] = useState();

  const { boardId } = useParams(); // 보드 uri 가져오기

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await boardGetOne(boardId);
    setRes(response);
    console.log(res);
  };

  const Data = res?.data;
  console.log(Data);

  const PostBtn = async () => {
    try {
      await axios.post("https://api.domarketdodo.shop/reply/post", {
        userId: boardId, // 일단 boardId로
        boardId: boardId,
        comment: inputText,
      });

      // 댓글이 등록된 후에 최신 데이터를 다시 가져옴
      await getData();
      console.log("댓글이 등록되었습니다.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <NavigatorMain />
      <TitleCom>
        <div className="category">[자유]</div>
        <div className="title">{Data?.title}</div>

        <div className="nickDiv">
          <div>{Data?.writer}</div>
          <div>{new Date(Data?.createdDate).toLocaleString()}</div>
        </div>
      </TitleCom>
      <Sector>
        <hr />
        <div className="sector">{Data?.content}</div>
        <hr />
      </Sector>

      {Data && (
        <div>
          {Data.replyList.map((varId) => (
            <div className="replyGet" key={varId.boardId}>
              <div className="nickGet">{varId?.nickname}</div>
              <div>{varId?.comment}</div>
            </div>
          ))}
        </div>
      )}

      <hr />
      <div className="replyInput">
        <div className="nick">유저 닉네임</div>
        <input
          type="text"
          placeholder="댓글을 입력해주세요"
          value={inputText}
          onChange={handleTextChange}
        ></input>
        <div className="registerBtn">
          <button onClick={PostBtn}>등록</button>
        </div>
      </div>
    </Container>
  );
}
