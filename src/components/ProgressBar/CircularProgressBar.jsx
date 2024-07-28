import React from "react";
import { Progress } from "antd";

const CircularProgressBar = ({ percentage }) => {
  return (
    <div className="circular-progress">
      <Progress
        type="circle"
        percent={percentage}
        width={100}
        strokeWidth={12}
        format={() => `${percentage}%`}
      />
    </div>
  );
};

export default CircularProgressBar;
