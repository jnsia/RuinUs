import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api/post-api";
import Cause from "../Components/Cause";
import Sort from "../Components/Sort";
import Reserve from "../Components/Reserve";
import Content from "../Components/Content";
import Navigation from "../Components/Navigation";

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

function Rewrite() {
  const { postId } = useParams();

  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [cause, setCause] = useState([]);
  const [sort, setSort] = useState([]);

  const [modalShow, setModalShow] = useState(false);
  const [custom, setCustom] = useState();

  const [reserve, setReserve] = useState("");
  const [reserveTime, setReserveTime] = useState(new Date());

  const navigate = useNavigate();

  function prevStep() {
    setStep(step - 1);
  }

  function nextStep() {
    if (title === "") {
      alert("제목을 입력해주세요.");
      return;
    }

    setStep(step + 1);
  }

  const rewritePost = async () => {
    api
      .updatePost(
        {
          title,
          texts: text,
          cause,
          sort,
          reserve: reserveTime,
        },
        postId
      )
      .then((res) => {
        navigate({ pathname: `/post/${postId}` });
      })
      .catch((err) => console.log(err));
  };

  const causeButtonClick = (button) => {
    if (cause.includes(button)) {
      const newCause = cause.filter((item) => item !== button);
      setCause(newCause);
    } else {
      if (cause.length === 3) {
        alert("최대 3개만 선택할 수 있습니다.");
        return false;
      }
      cause.push(button);
      setCause([...cause]);
    }
  };

  const sortButtonClick = (button) => {
    if (sort.includes(button)) {
      const newSort = sort.filter((item) => item !== button);
      setSort(newSort);
    } else {
      if (sort.length === 3) {
        alert("최대 3개만 선택할 수 있습니다.");
        return false;
      }
      sort.push(button);
      setSort([...sort]);
    }
  };

  const reserveButtonClick = (time) => {
    if (time === "직접입력") {
      setModalShow(true);
      return;
    }

    const now = Date.now() + reserveTimes[time] * 60000;
    let datetime = new Date(now);
    datetime.setHours(datetime.getHours() + 9);
    let result = datetime.toISOString().replace("T", " ").substring(0, 19);

    setReserve(time);
    setReserveTime(result);
  };

  const clickSetTime = (event) => {
    const customDate = event.target.attributes.datetime.value;

    let datetime = new Date(customDate);
    datetime.setHours(datetime.getHours() + 9);
    let result = datetime.toISOString().replace("T", " ").substring(0, 19);

    setModalShow(false);
    setCustom(result.substring(2, 16));
    setReserve("직접입력");
    setReserveTime(result);
  };

  const fetchData = async () => {
    api
      .fetchDetail(postId)
      .then((res) => {
        const { title, texts, cause, sort, reserve } = res.data;

        setTitle(title);
        setText(texts);
        setCause(cause);
        setSort(sort);
        setReserve("직접입력");
        setCustom(reserve.substring(2, 16).replace("T", " "));
        setReserveTime(reserve);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navigation
        step={step}
        prevStep={prevStep}
        nextStep={nextStep}
        savePost={() => rewritePost()}
      />
      {step === 1 && (
        <Content
          title={title}
          text={text}
          changeTitle={(title) => setTitle(title)}
          changeText={(text) => setText(text)}
        />
      )}
      {step === 2 && (
        <Cause cause={cause} clickEvent={(type) => causeButtonClick(type)} />
      )}
      {step === 3 && (
        <Sort sort={sort} clickEvent={(type) => sortButtonClick(type)} />
      )}
      {step === 4 && (
        <Reserve
          reserve={reserve}
          custom={custom}
          modalShow={modalShow}
          clickEvent={(time) => reserveButtonClick(time)}
          setTime={(time) => clickSetTime(time)}
        />
      )}
    </div>
  );
}

export default Rewrite;
