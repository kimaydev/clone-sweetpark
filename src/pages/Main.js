import React from "react";

import Visual from "../components/Visual";
import SweetPark from "../components/SweetPark";
import Vr from "../components/Vr";
import Program from "../components/Program";
import Schedule from "../components/Schedule";
import Notice from "../components/Notice";

const Main = () => {
  return (
    <div>
      <Visual />
      <SweetPark />
      <Vr />
      <Program />
      <Schedule />
      <Notice />
    </div>
  );
};

export default Main;
