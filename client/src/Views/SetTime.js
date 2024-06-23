import React, { forwardRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Datepicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

function SetTime(props) {
  const [date, setDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="m-2 p-2 btn btn-secondary" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="fs-6 px-2">
          삭제 시간 설정
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column justify-content-center align-items-center bg-dark p-2">
        <Datepicker
          selected={date}
          onChange={(datetime) => {
            setDate(datetime);
          }}
          placeholderText="나를 클릭하세요."
          locale={ko}
          dateFormat="yy년 MM월 dd일 (eee) hh:mm"
          minDate={new Date()}
          withPortal
          showTimeSelect
          timeIntervals={30}
          timeCaption="시간"
          customInput={<ExampleCustomInput />}
        />
      </Modal.Body>
      <Modal.Footer className="d-flex mx-2 px-2 justify-content-between">
        <button type="button" className="btn btn-dark my-2 btn-sm" onClick={props.onHide}>
          돌아가기
        </button>
        <button
          type="button"
          className="btn btn-dark my-2 btn-sm"
          datetime={date}
          onClick={props.onChange}
        >
          저장하기
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SetTime;
