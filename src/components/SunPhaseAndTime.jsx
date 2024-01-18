import React, { useState, useEffect } from 'react';

const SunPhaseAndTime = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [sunPhase, setSunPhase] = useState('');

  useEffect(() => {
    const getCurrentTime = () => {
      const currentDate = new Date();
      setCurrentTime(currentDate.toLocaleTimeString());
    };

    const getSunPhase = async () => {
      const response = await fetch('https://api.sunrise-sunset.org/json?lat=53.2001&lng=50.1501'); 
      const data = await response.json();
      setSunPhase(data.results.sunrise);
    };

    const interval = setInterval(() => {
      getCurrentTime();
    }, 1000);

    getCurrentTime();
    getSunPhase();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h4>Время в Самаре: {currentTime}</h4>
      <h4>Фаза Солнца: {sunPhase}</h4>
    </>
  );
};

export default SunPhaseAndTime;
