import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
    <h1 className="text-3xl font-bold underline">
      Hello world!
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
      <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
      <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
    </h1>
    </RecoilRoot>
  );
}

export default App;
