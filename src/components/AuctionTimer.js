import React, { useEffect, useState } from 'react';
import items from '../data/items';



const AuctionTimer = () => {
    const [timers, setTimers] = useState({});
  
    useEffect(() => {
      const intervalId = setInterval(updateTimers, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    const updateTimers = () => {
      const updatedTimers = {};
  
      items.forEach((item) => {
        const endTime = new Date(item.endTime).getTime();
        const now = new Date().getTime();
  
        if (endTime > now) {
          const timeRemaining = endTime - now;
          updatedTimers[item.id] = timeRemaining;
        }
      });
  
      setTimers(updatedTimers);
    };
  
    const formatTime = (time) => {
      const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((time % (1000 * 60)) / 1000);
  
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
  
    return (
      <div className="auction-timer">
        {items.map((item) => (
          <div key={item.id} className="timer">
            {timers[item.id] !== undefined && (
              <span>{formatTime(timers[item.id])}</span>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default AuctionTimer;
  