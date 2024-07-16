import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Signin from './Views/Signin';
import Home from './Views/Home';
import Write from './Views/Write';
import Rewrite from './Views/Rewrite';
import Error from './Views/Error';
import Post from './Views/Post';
import Signup from './Views/Signup';

function App() {
  const [token, setToken] = useState(localStorage.getItem("@isLogin"))

  useEffect(() => {
    const storedToken = localStorage.getItem("@isLogin")

    if (storedToken !== token) {
      setToken(storedToken)
    }
  }, [])

  return (
    <BrowserRouter>
      <div className="App bg-dark w-100 h-100">
        {token ? (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/rewrite/:postId" element={<Rewrite />}></Route>
            <Route path="/post/:postId" element={<Post />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        ) : (
          <Routes>
            <Route exact path="/" element={<Signin />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
