import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  function checkInfo() {
    // 아이디 입력 유무 체크
    if (userID == '') {
      alert('아이디를 입력하시오');

      return false;
    }

    // 암호 입력 유무 체크
    if (userPW == '') {
      alert('암호를 입력하세요.');

      return false;
    }

    // 암호 입력 유무 체크
    if (email == '') {
      alert('이메일를 입력하세요.');

      return false;
    }

    try {
      axios
        .post('http://localhost:8080/auth/signup', {
          userID: userID,
          userPW: userPW,
          email: email,
        })
        .then((res) => {
          if (res.status == 200) {
            alert('환영합니다!');
            navigate('/');
          } else if (res.status == 546) {
            alert('이미 가입된 ID 입니다.');
          } else {
            alert('오류가 발생하였습니다.');
          }
        });
      F;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div class="bg-light text-center col-12 col-md-8 col-lg-4 position-absolute top-50 start-50 translate-middle">
      <div class="m-4 p-4 bg-light">
        <div class="fs-1 fw-bold">Ruin Us</div>
        <div class="text-muted">"나쁜 기억 메모장"</div>
      </div>
      <form name="SignupForm" class="container bg-light col-12 col-md-10 col-lg-8 my-2 p-2">
        <div class="row justify-content-center my-2">
          <label for="userID" class="col-2 col-form-label border rounded-5">
            ID
          </label>
          <div class="col-6">
            <input
              type="text"
              class="form-control"
              name="userID"
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>
        </div>
        <div class="row justify-content-center my-4">
          <label for="userPW" class="col-2 col-form-label border rounded-5">
            PW
          </label>
          <div class="col-6">
            <input
              type="password"
              class="form-control"
              name="userPW"
              onChange={(e) => setUserPW(e.target.value)}
            />
          </div>
        </div>
        <div class="row justify-content-center my-2">
          <label for="userPW" class="col-2 col-form-label border rounded-5">
            Email
          </label>
          <div class="col-6">
            <input
              type="email"
              class="form-control"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </form>
      <div class="bg-light">
        <button class="btn btn-dark col-6 btn m-4 p-2" onClick={checkInfo}>
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Signup;
