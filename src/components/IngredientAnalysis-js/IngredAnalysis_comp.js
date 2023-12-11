import { useState, useEffect } from "react";
import NavigatorMain from "../Main-js/Navigator_main";
import Navitgator1 from "../Main-js/Navitgator1";
import style from "../css/IngredientAnalysis.module.css";
import style2 from "../css/ReviewComment.module.css";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Modal, Box, Button, Typography } from "@mui/material";
import ReviewComment from "./ReviewComment";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";
import { product_id } from "../Api/api";
import axios from "axios";
import styled from "styled-components";

// import axios from 'axios';
import { useParams } from "react-router-dom";
axios.defaults.withCredentials = true;
//[인증마크]모달 스타일 설정
const ModalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-30%, -30%)",
  width: 500,
  bgcolor: "background.paper",
  border: "3px solid #6E00FD",
  boxShadow: 10,
  p: 6,
};
const StyledDiv = styled.div`
  .replyInput {
    border: solid black;
    height: 200px;
    font-size: 18px;
    width: 1000px;
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
const ModalComponent = ({ data, open, onClose }) => {
  return (
    <>
      {data.map((D, index) => (
        <Modal
          key={index}
          open={open === index}
          onClose={onClose}
          aria-labelledby={D.title}
          aria-describedby={D.description}
        >
          <Box sx={ModalStyle}>
            <Typography id={D.title} variant="h6" component="h1">
              {D.title}
            </Typography>
            <Typography id={D.description} sx={{ mt: 2 }}>
              {D.description}
            </Typography>
          </Box>
        </Modal>
      ))}
    </>
  );
};
const IngrediList = ({ ingredients, handleOpen }) => {
  return ingredients.map((ingredient, index) => (
    <div style={{ borderBottom: "1px solid" }}>
      <div
        key={index}
        className={style.btn_Ingredi}
        onClick={() => handleOpen(index)}
      >
        {ingredient.title}
      </div>
    </div>
  ));
};

const IngredientAnalysis = () => {
  // axios.defaults.withCredentials = true;
  const [openModal, setOpenModal] = useState(false);
  const [currentModalIndex, setCurrentModalIndex] = useState(0);

  const [INopenModal, INsetOpenModal] = useState(false);
  const [INModalIndex, setINModalIndex] = useState(0);

  //인증마크창 모달 관련
  const handleOpen = (index) => {
    setCurrentModalIndex(index);
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };

  //성분창 모달 관련
  const INhandleOpen = (index) => {
    setINModalIndex(index);
    INsetOpenModal(index);
  };
  const INhandleClose = () => {
    INsetOpenModal(false);
  };
  const { detail } = useParams();
  console.log(detail);
  const [res, setRes] = useState([]);
  const [inputText, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // axios.defaults.withCredentials = true;
    const response = await product_id(detail);
    setRes(response);
    console.log(res);
  };
  console.log(res?.data); //옵셔널 체이닝
  const A = res?.data || [];
  console.log(A.reviewList);
  const PostBtn = async () => {
    try {
      await axios.post("https://api.domarketdodo.shop/review/post", {
        productId: detail, //일단
        reviewcomment: inputText,
      });

      // 댓글이 등록된 후에 최신 데이터를 다시 가져옴
      await getData();
      console.log("댓글이 등록되었습니다.");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <div className={style.container}>
        {/* 제품 정보(이미지,브랜드,이름,가격) 파트 */}
        {/* A.map((P, index) => {}); */}
        <div className={style.LeftArea_ProductInfo}>
          <div>
            <img src={A.product_image} alt={A.name} height="500px" />
          </div>
          <div className={style.LeftBotton}>
            <div>
              <p className={style.brand}>{A.brand}</p>
              <p className={style.name}>
                <h3>{A.name}</h3>
              </p>
              <p className={style.price}>{A.product_price}원</p>
            </div>
            <AiOutlineShareAlt size={25} />
          </div>
        </div>
        <div className={style.RightArea_IngredientInfo}>
          {/* 문버디스코어 파트 */}
          <div className={style.Section1}>
            <img
              src={"/imgs/MoonScore.png"}
              alt="문버디 스코어"
              height="100px"
            />
            <div className={style.title}>
              문버디 스코어<div className={style.real_moonscore}>{A.score}</div>
            </div>
          </div>
          {/* 성분 파트 */}
          <div className={style.Section2}>
            <div className={style.title}>
              <h4>성분</h4> 성분을 클릭하면 자세한 설명이 나옵니다.
            </div>
            <div className={style.ListContainer}>
              {A.ingredientList && (
                <IngrediList
                  ingredients={A.ingredientList}
                  handleOpen={INhandleOpen}
                />
              )}
            </div>
          </div>
          {A.ingredientList && (
            <ModalComponent
              data={A.ingredientList}
              open={INopenModal}
              onClose={INhandleClose}
              title={A.ingredientList.title}
              description={A.ingredientList.description}
            />
          )}
          {/* 인증마크 파트 */}
          <div className={style.Section3}>
            <div className={style.title}>
              <h4>인증마크</h4>마크를 클릭하면 자세한 설명이 나옵니다.
            </div>
            <div style={{ display: "flex" }}>
              {A.markList &&
                A.markList.map((data, index) => (
                  <div key={index}>
                    <Button onClick={() => handleOpen(index)}>
                      <img src={data.image} height="100px" />
                    </Button>
                    <Modal
                      open={openModal && currentModalIndex === index}
                      onClose={handleClose}
                      aria-labelledby={data.name}
                      aria-describedby={data.explanation}
                    >
                      <Box sx={ModalStyle}>
                        <Typography id={data.name} variant="h6" component="h1">
                          {data.name}
                        </Typography>
                        <Typography id={data.explanation} sx={{ mt: 2 }}>
                          {data.explanation}
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      {/* 제품 특징 & 리뷰 파트 */}
      <div className={style.BottomArea_FeatureAndReivew}>
        <Tabs
          defaultActiveKey="home"
          id="Tabs"
          className={style.Tabs}
          justify
          style={{ fontFamily: '"Aoboshi One", serif', marginBottom: "2rem" }}
        >
          <Tab eventKey="home" title="특징">
            <img src={A.product_info_image} />
          </Tab>
          <Tab eventKey="profile" title="리뷰">
            <StyledDiv>
              {A.reviewList?.map((Id) => (
                <div className="replyGet" key={Id.productId}>
                  <div className="nickGet">{Id?.nickname}</div>
                  <div>{Id?.reviewcomment}</div>
                </div>
              ))}
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
            </StyledDiv>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default IngredientAnalysis;
