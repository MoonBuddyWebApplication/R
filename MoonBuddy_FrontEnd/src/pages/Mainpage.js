import React from "react";
import Navigator_main from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import Main_1 from "../components/Main-js/Main_1";
import Main_2 from "../components/Main-js/Main_2";
import Main_3 from "../components/Main-js/Main_3";
import Main_4 from "../components/Main-js/Main_4";
import Footer from "../components/Main-js/Footer";
// import { GetData } from "../components/Api/api";
import { logout } from "../components/Api/api";


const Mainpage = () => {
<<<<<<< Updated upstream
=======
  // GetData();
  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await logout();
  //       console.log("2응답 데이터:", response.title);
  //       // 로그인 성공 후 필요한 작업 수행
  //     } catch (error) {
  //       // 에러 처리
  //       // console.error("로그인 실패:", error);
  //       console.error("2에러 발생:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
>>>>>>> Stashed changes
  return (
    <div style={{ width: "100%" }}>
      <Navitgator1 />
      <Navigator_main />
      <Main_1 />
      <Main_2 />
      <Main_3 />
      <Main_4 />
      <Footer />
    </div>
  );
};

export default Mainpage;
