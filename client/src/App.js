import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Views/Signin';
import Home from './Views/Home';
import Write from './Views/Write';
import Rewrite from './Views/Rewrite';
import Error from './Views/Error';
import Post from './Views/Post';
import Signup from './Views/Signup';

function App() {
  const token = localStorage.getItem('@isLogin');

  return (
    <BrowserRouter>
      <div class="App bg-dark">
        {token ? (
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/write" element={<Write />}></Route>
            <Route path="/rewrite" element={<Rewrite />}></Route>
            <Route path="/post" element={<Post />}></Route>
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
