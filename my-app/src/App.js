import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('학생이 추가되었습니다!');
  };

  return (
    <div className="App">
      <h1>한동대학교 학생 관리 프로그램</h1>
      <button className="button" onClick={handleClick}>학생 추가</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;
