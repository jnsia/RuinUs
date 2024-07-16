import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import api from "../api/post-api";

function Post() {
  const [data, setData] = useState(null);
  const [deleteDate, setDeleteDate] = useState("");
  const { postId } = useParams();

  const navigate = useNavigate();

  const prevStep = () => {
    navigate({pathname: '/'})
  };

  const nextStep = () => {
    navigate({pathname: `/rewrite/${postId}`})
  };

  const fetchData = async () => {
    api
      .fetchDetail(postId)
      .then((res) => {
        setData(res.data);

        const reserve = res.data.reserve;

        let datetime = new Date(reserve);
        datetime.setHours(datetime.getHours() + 9);
        datetime = datetime.toISOString().replace("T", " ").substring(0, 16);
        setDeleteDate(datetime);
      })
      .catch((err) => console.log(err));
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
      {data && (
        <div className="container bg-dark">
          <div className="row justify-content-center p-4">
            <div
              id="writeRegion"
              className="col-lg-8 col-md-10 col-sm-12 bg-light p-4"
            >
              <div id="postTitle" className="p-2 fw-bold fs-5">
                {data.title}
              </div>
              <hr />
              <div className="p-2 text-muted">
                {data.hashtags.map(
                  (hashtag) => hashtag && <span>#{hashtag} </span>
                )}
              </div>
              <div id="postContent" className="p-2 fs-5">
                {data.texts
                  .split("\n")
                  .map((text) => (text ? <div>{text}</div> : <br />))}
              </div>
              <div id="postInfo" className="p-2 fs-6 text-muted">
                삭제일 : {deleteDate}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
