import React from "react";
import { arrowUp } from "../assets";
import styles from "../styles";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p>
            <span className="text-2xl font-bold">Get</span>

            <span className="text-2xl font-bold text-blue-500">Started</span>
          </p>
        </div>

        <img src={arrowUp} alt="arrowUp" />
      </div>
    </div>
  );
};

export default GetStarted;
