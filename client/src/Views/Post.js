import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  const [data, setData] = useState(null);
  const { postId } = useParams();

  const prevStep = () => {
    document.location.href = "/";
  };

  const nextStep = () => {
    document.location.href = `/rewrite/${postId}`;
  };

  const fetchData = async () => {
    const token = localStorage.getItem("@isLogin");
    const res = await axios.get(
      `http://localhost:8080/content/${postId}/${token}`
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <button type="button" className="btn btn-dark m-2" onClick={prevStep}>
            이전
          </button>
          <div className="navbar-brand" href="#">
            Ruin Us
          </div>
          <button type="button" className="btn btn-dark m-2" onClick={nextStep}>
            수정
          </button>
        </div>
      </nav>
      {data &&
      <div className="container bg-dark">
        <div className="row justify-content-center p-4">
          <div
            id="writeRegion"
            className="col-lg-8 col-md-10 col-sm-12 bg-light p-4"
          >
            <div id="postTitle" className="p-2">
              {data.title}
            </div>
            <hr />
            <div className="p-2 text-muted">
              {data.hashtags.map((hashtag) => (
                hashtag && <span>#{hashtag} </span>
              ))}
            </div>
            <div id="postContent" className="p-2">
              {data.texts.split('\n').map((text) => (
                <p>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default Post;
