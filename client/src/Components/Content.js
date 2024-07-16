import React from "react";

function Content(props) {
  const { title, text, changeTitle, changeText } = props;

  const autoResizeTextarea = () => {
    let texts = document.querySelector("#input-text");

    if (texts) {
      texts.style.height = "auto";
      let height = texts.scrollHeight;
      texts.style.height = `${height}px`;
    }
  };

  return (
    <div class="container bg-dark">
      <div class="row justify-content-center p-4">
        <form
          id="writeRegion"
          name="writeForm"
          action="/write"
          method="post"
          class="col-lg-8 col-md-10 col-sm-12 bg-light p-4"
        >
          <input
            type="text"
            class="form-control fw-bold fs-5"
            placeholder="제목"
            value={title}
            onChange={(e) => changeTitle(e.target.value)}
          ></input>
          <hr />
          <textarea
            id="input-text"
            class="form-control fs-5"
            rows="1"
            onKeyUp={autoResizeTextarea}
            value={text}
            onChange={(e) => changeText(e.target.value)}
            placeholder="나쁜 기억을 적어주세요."
          ></textarea>
        </form>
      </div>
    </div>
  );
}

export default Content;
