import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation(props) {
  const { step, prevStep, nextStep, savePost } = props;

  const navigate = useNavigate();

  const goHome = () => {
    navigate({pathname: '/'})
  };

  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        {step === 1 ? (
          <button type="button" class="btn btn-dark m-2" onClick={() => goHome()}>
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
  );
}

export default Navigation;
