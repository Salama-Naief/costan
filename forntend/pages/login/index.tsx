import React from "react";
import LoginSide from "../../components/loginAndregister/LoginSide";
import SideBar from "../../components/loginAndregister/SideBar";

function Index() {
  return (
    <div className="grid md:grid-cols-2 h-screen  bg-textColor-50">
      <SideBar title="You are one step away from simply content planning." />
      <LoginSide />
    </div>
  );
}

export default Index;
