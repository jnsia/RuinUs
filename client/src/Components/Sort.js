import React from "react";

const sortType = [
  "슬픔",
  "질투",
  "분노",
  "서러움",
  "괴로움",
  "외로움",
  "억울함",
  "기타",
];

function Sort(props) {
  const { sort, clickEvent } = props;
  return (
    <div class="container bg-dark">
      <div class="m-4 p-2 fs-6 text-center text-white">
        감정을 분류해 보세요.
      </div>
      <div class="row justify-content-center m-2">
        {sortType.map((type) => (
          <button
            key={type}
            className={
              sort.includes(type)
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

export default Sort;
