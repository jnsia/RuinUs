import React from "react";

const causeType = [
  "사랑",
  "직장",
  "취업",
  "인간관계",
  "사업",
  "건강",
  "학업",
  "기타",
];

function Cause(props) {
  const { cause, clickEvent } = props;

  return (
    <div class="container bg-dark">
      <div class="m-4 p-2 fs-6 text-center text-white">
        감정의 원인은 무엇이었나요?
      </div>
      <div class="row justify-content-center m-2">
        {causeType.map((type) => (
          <button
            key={type}
            className={
              cause.includes(type)
                ? "col-4 btn btn-secondary m-2 p-2 active"
                : "col-4 btn btn-secondary m-2 p-2"
            }
            onClick={() => clickEvent(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cause;
