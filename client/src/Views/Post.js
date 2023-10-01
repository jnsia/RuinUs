import React from 'react';

function Post() {
  function rewrite() {
    const title = document.querySelector('#postTitle').innerHTML;
    const content = document.querySelector('#postContent').innerHTML;

    console.log(title);
    console.log(content);
  }

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <button type="button" class="btn btn-dark m-2" onClick={prevStep}>
            이전
          </button>
          <div className="navbar-brand" href="#">
            Ruin Us
          </div>
          <button type="button" class="btn btn-dark m-2" onClick={nextStep}>
            다음
          </button>
        </div>
      </nav>
      <div class="container bg-dark">
        <div class="row justify-content-center p-4">
          <div id="writeRegion" class="col-lg-8 col-md-10 col-sm-12 bg-light p-4">
            <div id="postTitle" class="p-2">
              임시 제목
            </div>
            <hr />
            <div class="p-2 text-muted">#슬픔 #나두 #잠와 #졸려요 #힝... #어디?까지</div>
            <div id="postContent" class="p-2">
              안녕하세여... 저는 준수이에이오
              <br />
              테스용 셋ㅇ이 왜 이래
              <br />
              imepsdmvji dkanrjsk tmqslek!
            </div>
          </div>
          <button class="btn m-2 col-6 btn-sm btn-outline-light" onClick={rewrite}>
            임시 수정 버튼
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
