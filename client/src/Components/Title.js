import React from 'react';

function Title(props) {
  function goPost() {
    document.location.href = `/post/${props.content.id}`;
  }

  return (
    <div>
      <div className="card m-4" onClick={goPost}>
        <div className="card-body">
          <div id="title" class="m-1 fw-bold fs-6">
            {props.content.title}
          </div>
          <div id="deleteTime" class="m-1 fs-6 text-end text-muted">
            {props.content.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
