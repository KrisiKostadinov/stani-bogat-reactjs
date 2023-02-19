import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { moneyBar } from "../data";

const MoneyBar = () => {
  const currentQuestion = useSelector((state) => state.question.currentQuestion);

  return (
    <>
      <div className="w-[300px] min-h-[60%] border-4">
        <ul className="w-full flex flex-col">
          {moneyBar.map(item => (
            <li
              className={`w-full text-xl flex gap-5 py-1 px-2 ${
                item.number === currentQuestion
                  ? "text-white bg-sky-600"
                  : "text-black bg-orange-200"
              }`}
              key={item.number}
            >
              <span className="w-[40px]">{item.number}</span>
              <span>{item.money.toLocaleString("en-US")} лв.</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoneyBar;
