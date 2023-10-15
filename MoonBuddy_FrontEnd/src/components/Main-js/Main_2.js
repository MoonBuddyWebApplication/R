import React from "react";
import styles from "../css/main2.module.css";

const Main_2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.article}>
        <h1 className={styles.title}>월경, 케어하고 개선할 수 있어요</h1>
        <span>
          월경을 생각하면 무엇이 떠오르나요?
          <br />
          짜증, 불안, 우울감처럼 반갑지 않은 감정일 수도, 간지러움, 냄새, 축축함
          같은 불편함일 수도,
          <br />
          어쩌면 월경통의 아픔일 수도 있겠죠.
          <br />
          <br />
          각자 갖는 고민은 다를 수 있지만 월경은 분명 케어하고 개선할 수 있는
          영역이에요.
        </span>
      </div>
      <div className={styles.images}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/main_img_2.png"}
          className={styles.img_2}
          alt="main2"
        />
        <img
          src={process.env.PUBLIC_URL + "/imgs/main_img_3.png"}
          className={styles.img_3}
          alt="main3"
        />
      </div>
    </div>
  );
};

export default Main_2;
