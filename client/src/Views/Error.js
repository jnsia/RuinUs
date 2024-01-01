import React from 'react';

function Error() {
  function GoHome() {
    document.location.href = '/';
  }

  return (
    <div class="bg-white">
      <h1>Error</h1>
      <button onClick={GoHome()}>돌아가기</button>
    </div>
  );
}

export default Error;
