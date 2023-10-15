import React from "react";
import Navigator_main from "../components/Main-js/Navigator_main";
import Navitgator1 from "../components/Main-js/Navitgator1";
import Main_1 from "../components/Main-js/Main_1";
import Main_2 from "../components/Main-js/Main_2";
import Main_3 from "../components/Main-js/Main_3";
import Main_4 from "../components/Main-js/Main_4";
import Footer from "../components/Main-js/Footer";
const Mainpage = () => {
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
