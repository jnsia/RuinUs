import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');

  const navigate = useNavigate();

  function goResister() {
    navigate('/signup');
  }

  function login() {
    if (userID === '') {
      alert('아이디를 입력하세요.');

      return false;
    }

    if (userPW === '') {
      alert('암호를 입력하세요.');

      return false;
    }

    axios
      .post('http://localhost:8080/auth/login', {
        userID: userID,
        userPW: userPW,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem('@isLogin', res.data);
          window.location.reload();
        }
      })
      .catch((err) => {
        const errMsg = err.response?.data
        alert(errMsg)
      });
  }

  return (
    <div class="bg-light text-center col-12 col-md-8 col-lg-4 position-absolute top-50 start-50 translate-middle">
      <div class="my-4 pt-2 bg-light">
        <div class="fs-1 fw-bold">Ruin Us</div>
        <div class="text-muted">"나쁜 기억 메모장"</div>
      </div>
      <form
        name="loginForm"
        action="/auth/login"
        method="post"
        class="container bg-light col-12 col-md-10 col-lg-8 my-2 p-2"
      >
        <div class="row justify-content-center">
          <label for="userID" class="col-2 col-form-label border rounded-5">
            ID
          </label>
          <div class="col-8 col-lg-10">
            <input
              type="text"
              class="form-control"
              name="userID"
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
        </div>
        <div class="row justify-content-center mt-2">
          <label for="userPW" class="col-2 col-form-label border rounded-5">
            PW
          </label>
          <div class="col-8 col-lg-10">
            <input
              type="password"
              class="form-control"
              name="userPW"
              onChange={(e) => setUserPW(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div class="bg-light">
        <button class="btn btn-outline-dark col-4 btn m-2" onClick={goResister}>
          회원가입
        </button>
        <button class="btn btn-dark col-4 btn m-2" onClick={login}>
          로그인
        </button>
      </div>
      {/* <hr /> */}
      <div class="bg-light m-2 p-2">
        {/* <button class="p-2 m-2">카카오</button>
        <button class="p-2 m-2">구글</button>
        <button class="p-2 m-2">페이스북</button> */}
      </div>
    </div>
  );
}

export default Signin;
