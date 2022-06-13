import React from 'react';
import './HomeScreen.css';

export default function HomeScreen({ createCall, startHairCheck }) {
  const startDemo = () => {
    createCall().then((url) => {
      startHairCheck(url);
    });
  };

  return (
    <div className="home-screen">
      <button onClick={startDemo}>Create your Classroom!</button>
    </div>
  );
}
