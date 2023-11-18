import styled from "styled-components";

export default function ChatComponent({ props }) {
  const goodLen = 15;
  const comLen = 3;
  const { content, title, writer } = props;
  const Chat = styled.div`
    width: 1320px;
    height: 180px;
    border: solid 0.2em;
    border-radius: 10px;
    border-color: #3d008b;
    padding: 10px;
    margin: auto;
    margin-top: 33px;

    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;
  `;

  const Topic = styled.div`
    font-size: 32px;
    color: #b6a3e3;
  `;
  return (
    <Chat>
      <Topic>{content}</Topic>
      <div style={{ fontSize: "36px", marginTop: "8px" }}>{title}</div>
      <div style={{ marginTop: "4px" }}>{writer}</div>
      <div style={{ marginTop: "18px" }}>
        {content !== null && <div style={{ marginTop: "4px" }}>{title}</div>}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ marginRight: "5px" }}>
          <img
            src="/imgs/Good.png"
            style={{ width: "30px", height: "30px" }}
          ></img>
          {goodLen}
        </div>
        <div>
          <img
            src="/imgs/Comment.png"
            style={{ width: "30px", height: "30px" }}
          ></img>
          {comLen}
        </div>
      </div>
    </Chat>
  );
}
