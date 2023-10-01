import React from 'react';

function Rewrite() {
  const autoResizeTextarea = () => {
    let texts = document.querySelector('#input-text');

    if (texts) {
      texts.style.height = 'auto';
      let height = texts.scrollHeight;
      texts.style.height = `${height}px`;
    }
  };

  return (
    <div>
      {/* <Header left="취소" prev="Post" next="Cause" right="다음" /> */}
      <div class="container bg-dark">
        <div class="row justify-content-center p-4">
          <form id="writeRegion" class="col-lg-8 col-md-10 col-sm-12 bg-light p-4">
            <input type="text" class="form-control" placeholder="제목"></input>
            <hr />
            <textarea
              id="input-text"
              class="form-control fs-6"
              rows="1"
              onKeyUp={autoResizeTextarea}
              placeholder="나쁜 기억을 적어주세요."
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Rewrite;
