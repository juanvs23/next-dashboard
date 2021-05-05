import React from "react";
import LayoutComponent from "../components/layout/layout";
import { FunctionalsContent } from "../context/contextApi";

const index = () => {
  const { setTitleContent } = React.useContext(FunctionalsContent);
  React.useEffect(() => {
    setTitleContent("Home");
  }, []);
  return (
    <LayoutComponent>
      Hola
      <i className="fa fa-check"></i>
    </LayoutComponent>
  );
};

export default index;
