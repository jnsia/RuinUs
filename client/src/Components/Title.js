import React from 'react';

function Title(props) {
  function goPost() {
    document.location.href = '/post';
  }

  return (
    <div>
      <div className="card m-4" onClick={goPost}>
        <div className="card-body">
          <div id="title" class="m-1 fw-bold fs-6">
            {props.title}
          </div>
          <div id="deleteTime" class="m-1 fs-6 text-end text-muted">
            {props.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
