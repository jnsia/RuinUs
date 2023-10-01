import React, { forwardRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Datepicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

function SetTime(props) {
  const [date, setDate] = useState(new Date());

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button class="m-2 p-2 btn btn-secondary" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  let datetime = date;

  // console.log(date);
  // console.log(datetime);

  return (
    <Modal {...props} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" class="fs-6 px-2">
          삭제 시간 설정
        </Modal.Title>
      </Modal.Header>
      <Modal.Body class="d-flex flex-column justify-content-center align-items-center bg-dark p-2">
        <Datepicker
          selected={date}
          onChange={(datetime) => {
            setDate(datetime);
          }}
          placeholderText="나를 클릭하세요."
          locale={ko}
          dateFormat="yy년 MM월 dd일 aa h:mm"
          minDate={new Date()}
          withPortal
          showTimeSelect
          timeIntervals={30}
          timeCaption="Time"
          customInput={<ExampleCustomInput />}
        />
      </Modal.Body>
      <Modal.Footer class="d-flex mx-2 px-2 justify-content-between">
        <button type="button" class="btn btn-dark my-2 btn-sm" onClick={props.onHide}>
          돌아가기
        </button>
        <button
          type="button"
          class="btn btn-dark my-2 btn-sm"
          datetime={datetime}
          onClick={props.onChange}
        >
          저장하기
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default SetTime;
