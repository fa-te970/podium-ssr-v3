import React from "react";
import Loading from "components/Loading";
import animation from "./animation.json";

export default function Splash() {
  return (
    <div className="loading_box">
      <div className="loading_content">
        <Loading />
        <p>در حال بارگذاری صفحه مقصد</p>
      </div>
    </div>
  );
}
