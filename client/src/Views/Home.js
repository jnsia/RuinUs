import React from 'react';
import Title from '../Components/Title';
import Setting from './setting';
import testDB from './testDB.json';

function Home() {
  const [modalShow, setModalShow] = React.useState(false);

  function goWrite() {
    document.location.href = `/Write`;
  }

  return (
    <div>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <button type="button" class="btn btn-dark m-2" onClick={() => setModalShow(true)}>
            설정
          </button>
          <div className="navbar-brand" href="#">
            {/* <img src="./wood-bg.jpg" alt="Ruin Us" width="30" height="24" class="d-inline-block align-text-top" /> */}
            Ruin Us
          </div>
          <Setting show={modalShow} onHide={() => setModalShow(false)} />
          <button type="button" class="btn btn-dark m-2" onClick={goWrite}>
            작성
          </button>
        </div>
      </nav>
      <div class="container">
        <div class="row justify-content-center">
          <div class="bg-dark col-lg-8 col-md-10 col-sm-12">
            {testDB.contents.map((contents, index) => (
              <Title key={index} title={contents.title} tag={contents.tag} time={contents.time} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
