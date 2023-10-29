import NavigatorMain from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import styled from "styled-components";
import AnalyzeGrid from "../components/Com-js/AnalyzeGrid";

export default function Analyze() {
  const Container = styled.div`
    width: 1344px;
    margin: auto;
    display: flex;
    flex-direction: column;
    @import url("https://fonts.googleapis.com/css2?family=Aoboshi+One&family=Gugi&family=Noto+Serif+KR:wght@200&display=swap");
    font-family: "Aoboshi One", serif;
    font-family: "Gugi", cursive;
    font-family: "Noto Serif KR", serif;

    .sortBar {
      font-size: 10px;
      margin-top: 14px;
      height: 100px;
    }

    .displayBar {
      display: flex;
      flex-wrap: wrap;
    }

    .imgBox {
      width: 336px;

      img {
        width: 100%;
      }

      div {
        width: 100%;
        margin-top: 4px;
      }
    }
  `;

  const arrLen = 150;

  // 제품 데이터 배열 정의
  const productData = [
    {
      brand: "브랜드1",
      name: "제품1",
      price: "가격1",
      image: "imgs/sample.png",
    },
    {
      brand: "브랜드2",
      name: "제품2",
      price: "가격2",
      image: "imgs/sample.png",
    },
    {
      brand: "브랜드3",
      name: "제품3",
      price: "가격3",
      image: "imgs/sample.png",
    },
    {
      brand: "브랜드4",
      name: "제품4",
      price: "가격4",
      image: "imgs/sample.png",
    },
    {
      brand: "브랜드5",
      name: "제품5",
      price: "가격5",
      image: "imgs/sample.png",
    },
    // 추가 데이터 여따가
  ];

  return (
    <div>
      <Navitgator1 />
      <NavigatorMain />
      <Container>
        <div className="sortBar">
          <span>인기순 |</span>
          <span> 출시순 |</span>
          <span> 별점순 |</span>
          <span> 리뷰순</span>
          <div style={{ marginTop: "14px", fontSize: "20px" }}>
            {arrLen}개의 게시물
          </div>
        </div>
        <div className="displayBar">
          {productData.map((product, index) => (
            <div className="imgBox" key={index}>
              <img src={product.image} alt={product.name} />
              <div style={{ fontSize: "15px" }}>{product.brand}</div>
              <div style={{ fontSize: "24px", marginTop: "4px" }}>
                {product.name}
              </div>
              <div style={{ fontSize: "32px", marginTop: "4px" }}>
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
