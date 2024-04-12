import React, { useEffect, useState } from "react";
import SetTime from "./SetTime";
import axios from 'axios'

const causeType = ['사랑', '직장', '취업', '인간관계', '사업', '건강', '학업', '기타'];
const sortType = ['슬픔', '질투', '분노', '서러움', '괴로움', '외로움', '억울함', '기타'];
const reserveTimes = {
  "삭제하지 않음": 60 * 24 * 365 * 39,
  "10분 후": 10,
  "1시간 후": 60,
  "1일 후": 60 * 24,
  "일주일 후": 60 * 24 * 7,
  "한 달 후": 60 * 24 * 30,
  "1년 후": 60 * 24 * 365,
}

function Write() {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [cause, setCause] = useState([]);
  const [sort, setSort] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [custom, setCustom] = useState();

  const [reserve, setReserve] = useState("");
  const [selectedReserve, setSelectedReserve] = useState("");

  const goHome = () => {
    document.location.href = "/";
  };

  function prevStep() {
    setStep(step - 1);
  }

  function nextStep() {
    setStep(step + 1);
  }

  const savePost = async () => {
    const token = localStorage.getItem("@isLogin");

    axios.post(`http://localhost:8080/content/${token}`, {
      title,
      texts: text,
      cause,
      sort,
      reserve,
    })
    .then((res) => {
      goHome();
    })
    .catch((err) => console.log(err))
  };

  const autoResizeTextarea = () => {
    let texts = document.querySelector("#input-text");

    if (texts) {
      texts.style.height = "auto";
      let height = texts.scrollHeight;
      texts.style.height = `${height}px`;
    }
  };

  const causeButtonClick = (button) => {
    if (cause.includes(button)) {
      cause.pop(button);
    } else {
      if (cause.length === 3) {
        alert("최대 3개만 선택할 수 있습니다.");
        return false;
      }
      cause.push(button);
    }
    setCause([...cause]);
  };

  const sortButtonClick = (button) => {
    if (sort.includes(button)) {
      sort.pop(button);
    } else {
      if (sort.length === 3) {
        alert("최대 3개만 선택할 수 있습니다.");
        return false;
      }
      sort.push(button);
    }
    setSort([...sort]);
  };

  const reserveButtonClick = (button) => {
    if (button === "직접입력") {
      setModalShow(true);
    }

    setReserveButton(() => ({
      "삭제하지 않음": false,
      "10분 후": false,
      "1시간 후": false,
      "1일 후": false,
      "일주일 후": false,
      "한 달 후": false,
      "1년 후": false,
      직접입력: false,

      // 밑의 반복문 써보기

      // for (let key in obj) {
      //   if (obj.hasOwnProperty(key)) {
      //     obj[key] = false;
      //   }
      // }

      [button]: !reserveButton[button],
    }));

    if (button === "직접입력") {
      setReserve(custom);
      console.log(custom);
    } else {
      setReserve(button);
      console.log(button);
    }
  };

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          {step === 1 ? (
            <button type="button" class="btn btn-dark m-2" onClick={goHome}>
              이전
            </button>
          ) : (
            <button type="button" class="btn btn-dark m-2" onClick={prevStep}>
              이전
            </button>
          )}
          <div className="navbar-brand" href="#">
            Ruin Us
          </div>
          {step === 4 ? (
            <button type="button" class="btn btn-dark m-2" onClick={savePost}>
              저장
            </button>
          ) : (
            <button type="button" class="btn btn-dark m-2" onClick={nextStep}>
              다음
            </button>
          )}
        </div>
      </nav>
      {step === 1 && (
        <div class="container bg-dark">
          <div class="row justify-content-center p-4">
            <form
              id="writeRegion"
              name="writeForm"
              action="/write"
              method="post"
              class="col-lg-8 col-md-10 col-sm-12 bg-light p-4"
            >
              <input
                type="text"
                class="form-control"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
              <hr />
              <textarea
                id="input-text"
                class="form-control fs-6"
                rows="1"
                onKeyUp={autoResizeTextarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="나쁜 기억을 적어주세요."
              ></textarea>
            </form>
          </div>
        </div>
      )}
      {step === 2 && (
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
                onClick={() => causeButtonClick(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
      {step === 3 && (
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
                onClick={() => sortButtonClick(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      )}
      {step === 4 && (
        <div class="container bg-dark">
          <div class="m-4 p-2 fs-6 text-center text-white">
            <div>당신의 글을 삭제합니다.</div>
            <br />
            <div>언제 삭제할까요?</div>
          </div>
          <div
            class="row justify-content-center m-2 mb-0 p-2"
            id="reserve-btns"
          >
            {Object.keys(reserveButton).map((button) => (
              <button
                key={button}
                className={
                  reserveButton[button]
                    ? "col-10 col-md-8 btn btn-secondary m-2 p-2 active"
                    : "col-10 col-md-8 btn btn-secondary m-2 p-2"
                }
                onClick={() => reserveButtonClick(button)}
              >
                {button === "직접입력" ? custom || button : button}
              </button>
            ))}
            <SetTime
              show={modalShow}
              onHide={() => setModalShow(false)}
              onChange={(e) => {
                const customDate = e.target.attributes.datetime.value;

                setModalShow(false);
                setCustom(customDate);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Write;
