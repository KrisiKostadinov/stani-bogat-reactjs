import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItems, updateItem } from "../reducers/questionReducer";
import { increment } from "../reducers/questionReducer";
import { questions as questionsData } from "../data";

const Questions = () => {
  const { items, item, currentQuestion } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    let isSubscribed = true;

    if (isSubscribed) {
      dispatch(setItems({ payload: questionsData }));
    }

    return () => {
      isSubscribed = false;
    };
  }, []);

  useEffect(() => {
    dispatch(updateItem());
  })

  const selectAnswer = (number) => {
    if (number === currentQuestion) {
      dispatch(updateItem());
    } else {

    }
  }

  return (
    <>
      <div className="w-full h-[400px]">
        <div className="w-full h-30 text-xl py-4 px-5 text-white text-center rounded custom-border bg-gradient">
          {item?.title}
        </div>
        <ul className="grid grid-cols-2 gap-2 mt-10">
          <li
            className=" w-full text-white py-3 px-5 rounded border-2 custom-border bg-gradient success cursor-pointer"
            onClick={() => selectAnswer(item)}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            suscipit!
          </li>
          <li
            className=" w-full text-white py-3 px-5 rounded border-2 custom-border bg-gradient cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            suscipit!
          </li>
          <li
            className=" w-full text-white py-3 px-5 rounded border-2 custom-border bg-gradient cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            suscipit!
          </li>
          <li
            className=" w-full text-white py-3 px-5 rounded border-2 custom-border bg-gradient error cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            suscipit!
          </li>
        </ul>
      </div>
    </>
  );
};

export default Questions;
