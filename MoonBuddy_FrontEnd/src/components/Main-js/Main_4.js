import React from "react";
import styles from "../css/main4.module.css";
import { Link } from "react-router-dom";
const Main_4 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <h1>가장 믿을만한 문버디 랭킹</h1>
        <p>
          사용자들이 작성한 솔직한 리뷰가 담긴<br></br>
          문버디 랭킹에서 믿을만한 제품을 찾아보세요.
        </p>
      </div>
      <div className={styles.imgs}>
        <img src={process.env.PUBLIC_URL + "/imgs/Ellipse2.png"} alt="e1" />
        <img src={process.env.PUBLIC_URL + "/imgs/Ellipse3.png"} alt="e2" />
        <img src={process.env.PUBLIC_URL + "/imgs/Ellipse4.png"} alt="e3" />
        <img src={process.env.PUBLIC_URL + "/imgs/Ellipse5.png"} alt="e4" />
      </div>
      <div
        style={{
          backgroundColor: "#ece4fe",
          width: "35%",
          height: "10vh",
          marginTop: "5%",
          borderColor: "#ece4fe",
          filter: "drop-shadow(5px 5px 5px #000)",
          color: "#8c80ff",
          fontSize: "30px",
          fontWeight: "1000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/analyze"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          성분분석 보러가기
        </Link>
      </div>
    </div>
  );
};

export default Main_4;
