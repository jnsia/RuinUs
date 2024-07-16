import React, { useEffect } from "react";
import SetTime from "../Views/SetTime";

const reserveTimes = {
  "삭제하지 않음": 60 * 24 * 365 * 39,
  "10분 후": 10,
  "1시간 후": 60,
  "1일 후": 60 * 24,
  "일주일 후": 60 * 24 * 7,
  "한 달 후": 60 * 24 * 30,
  "1년 후": 60 * 24 * 365,
  직접입력: 0,
};

function Reserve(props) {
  const { reserve, custom, modalShow, clickEvent, setTime } = props;

  return (
    <div class="container bg-dark">
      <div class="m-4 p-2 fs-6 text-center text-white">
        <div>당신의 글을 삭제합니다.</div>
        <br />
        {custom}
        <div>언제 삭제할까요?</div>
      </div>
      <div class="row justify-content-center m-2 mb-0 p-2" id="reserve-btns">
        {Object.keys(reserveTimes).map((time) => (
          <button
            key={time}
            className={
              reserve == time
                ? "col-10 col-md-8 btn btn-secondary m-2 p-2 active"
                : "col-10 col-md-8 btn btn-secondary m-2 p-2"
            }
            onClick={() => clickEvent(time)}
          >
            {time === "직접입력" ? custom || time : time}
          </button>
        ))}
        <SetTime
          show={modalShow}
          onHide={() => setModalShow(false)}
          onChange={(event) => setTime(event)}
        />
      </div>
    </div>
  );
}

export default Reserve;
