import React, { useEffect, useState } from 'react';
import Title from '../Components/Title';
import Setting from './setting';
import axios from 'axios';

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);

  function goWrite() {
    document.location.href = `/Write`;
  }

  useEffect(() => {
    async function fetchData() { 
      const token = localStorage.getItem("@isLogin")
      const res = await axios.get(`http://localhost:8080/home/${token}`)
    
      setData(res.data)
      console.log(res.data)
    }

    fetchData()
  }, [])

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
            {data.map((contents, index) => (
              <Title key={index} title={contents.title} tag={contents.tag} time={contents.time} />
            ))}
            {data.length === 0 && (<p className='text-white'>없어요</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
