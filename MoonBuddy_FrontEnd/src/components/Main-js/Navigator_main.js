import React from "react";
import styles from "../css/Navigator.module.css";
import { Link } from "react-router-dom";
const NavigatorMain = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <img
          src={process.env.PUBLIC_URL + "/imgs/Moonbuddy_logo.png"}
          className={styles.logo}
          alt="Moonbuddy_logo"
        ></img>
        <div className={styles.menu_bar}>
          <Link to="/" className={styles.links}>
            문버디
          </Link>
          <Link to="/" className={styles.links}>
            성분분석
          </Link>
          <Link to="/" className={styles.links}>
            생리뉴스
          </Link>
          <Link to="/com" className={styles.links}>
            커뮤니티
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavigatorMain;
