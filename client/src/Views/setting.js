import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Setting(props) {
  function logout() {
    document.location.href = '/';
    localStorage.clear('@isLogin');
  }

  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" class="fs-6 px-2">
          설정
        </Modal.Title>
      </Modal.Header>
      <Modal.Body class="p-2 m-2 row">
        <button type="button" class="btn btn-dark my-2" onClick={logout}>
          로그아웃
        </button>
        <button type="button" class="btn btn-dark my-2" onClick={props.onHide}>
          돌아가기
        </button>
      </Modal.Body>
      {/* <Modal.Footer class="m-2 p-2"></Modal.Footer> */}
    </Modal>
  );
}

export default Setting;
