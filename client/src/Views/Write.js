import React, { useEffect, useState } from 'react';
import SetTime from './SetTime';

let causeSelect = [];
let sortSelect = [];

function Write(props) {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const [cause, setCause] = useState([]);
  const [causeButton, setCauseButton] = useState({
    사랑: false,
    직장: false,
    취업: false,
    인간관계: false,
    사업: false,
    건강: false,
    학업: false,
    기타: false,
  });

  const [sort, setSort] = useState([]);
  const [sortButton, setSortButton] = useState({
    슬픔: false,
    질투: false,
    분노: false,
    서러움: false,
    괴로움: false,
    외로움: false,
    억울함: false,
    기타: false,
  });

  const [modalShow, setModalShow] = useState(false);
  const [custom, setCustom] = useState();

  const [reserve, setReserve] = useState('');
  const [reserveButton, setReserveButton] = useState({
    '삭제하지 않음': false,
    '10분 후': false,
    '1시간 후': false,
    '1일 후': false,
    '일주일 후': false,
    '한 달 후': false,
    '1년 후': false,
    직접입력: false,
  });

  const goHome = () => {
    document.location.href = '/';
  };

  function prevStep() {
    setStep(step - 1);
  }

  function nextStep() {
    setStep(step + 1);
  }

  const savePost = () => {};

  const autoResizeTextarea = () => {
    let texts = document.querySelector('#input-text');

    if (texts) {
      texts.style.height = 'auto';
      let height = texts.scrollHeight;
      texts.style.height = `${height}px`;
    }
  };

  const causeButtonClick = (button) => {
    if (causeSelect.includes(button)) {
      causeSelect.pop(button);
    } else {
      if (causeSelect.length === 3) {
        alert('최대 3개만 선택할 수 있습니다.');
        return false;
      }

      causeSelect.push(button);
    }

    setCauseButton((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));

    setCause(causeSelect);
    console.log(cause);
  };

  const sortButtonClick = (button) => {
    if (sortSelect.includes(button)) {
      sortSelect.pop(button);
    } else {
      if (sortSelect.length === 3) {
        alert('최대 3개만 선택할 수 있습니다.');
        return false;
      }

      sortSelect.push(button);
    }

    setSortButton((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));

    setSort(sortSelect);
    console.log(sort);
  };

  const reserveButtonClick = (button) => {
    if (button === '직접입력') {
      setModalShow(true);
    }

    setReserveButton(() => ({
      '삭제하지 않음': false,
      '10분 후': false,
      '1시간 후': false,
      '1일 후': false,
      '일주일 후': false,
      '한 달 후': false,
      '1년 후': false,
      직접입력: false,

      // 밑의 반복문 써보기

      // for (let key in obj) {
      //   if (obj.hasOwnProperty(key)) {
      //     obj[key] = false;
      //   }
      // }

      [button]: !reserveButton[button],
    }));

    if (button === '직접입력') {
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
            <button type="button" class="btn btn-dark m-2" onClick={nextStep}>
              다음
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
          <div class="m-4 p-2 fs-6 text-center text-white">감정의 원인은 무엇이었나요?</div>
          <div class="row justify-content-center m-2">
            {Object.keys(causeButton).map((button) => (
              <button
                key={button}
                className={
                  causeButton[button]
                    ? 'col-4 btn btn-secondary m-2 p-2 active'
                    : 'col-4 btn btn-secondary m-2 p-2'
                }
                onClick={() => causeButtonClick(button)}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      )}
      {step === 3 && (
        <div class="container bg-dark">
          <div class="m-4 p-2 fs-6 text-center text-white">감정을 분류해 보세요.</div>
          <div class="row justify-content-center m-2">
            {Object.keys(sortButton).map((button) => (
              <button
                key={button}
                className={
                  sortButton[button]
                    ? 'col-4 btn btn-secondary m-2 p-2 active'
                    : 'col-4 btn btn-secondary m-2 p-2'
                }
                onClick={() => sortButtonClick(button)}
              >
                {button}
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
          <div class="row justify-content-center m-2 mb-0 p-2" id="reserve-btns">
            {Object.keys(reserveButton).map((button) => (
              <button
                key={button}
                className={
                  reserveButton[button]
                    ? 'col-10 col-md-8 btn btn-secondary m-2 p-2 active'
                    : 'col-10 col-md-8 btn btn-secondary m-2 p-2'
                }
                onClick={() => reserveButtonClick(button)}
              >
                {button === '직접입력' ? custom || button : button}
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
