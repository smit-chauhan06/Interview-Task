import React, { useRef, useState } from "react";

const CountDown = () => {
  const [seconds, setSeconds] = useState();
  const [minutes, setMinutes] = useState();
  const [hours, setHours] = useState();

  const intervalRef = useRef(null);

  const startInterval = () => {
    if (intervalRef.current) return; // Prevent multiple intervals

    intervalRef.current = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) return prevSec - 1;

        setMinutes((prevMin) => {
          if (prevMin > 0) {
            setSeconds(59);
            return prevMin - 1;
          }

          setHours((prevHr) => {
            if (prevHr > 0) {
              setMinutes(59);
              setSeconds(59);
              return prevHr - 1;
            }

            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return 0;
          });

          return 0;
        });

        return 0;
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <section
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <input
          placeholder="00"
          value={hours}
          onChange={(e) => {
            setHours(e.target.value);
          }}
          style={{
            width: 80,
            height: 50,
            textAlign: "center",
          }}
        />
        <input
          placeholder="00"
          value={minutes}
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
          style={{
            width: 80,
            height: 50,
            textAlign: "center",
          }}
        />
        <input
          placeholder="00"
          value={seconds}
          onChange={(e) => {
            setSeconds(e.target.value);
          }}
          style={{
            width: 80,
            height: 50,
            textAlign: "center",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginTop: 10,
        }}
      >
        <button
          style={{
            height: 40,
            width: 60,
          }}
          onClick={() => {
            startInterval();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            stopTimer();
          }}
          style={{
            height: 40,
            width: 60,
          }}
        >
          Stop
        </button>
        <button
          style={{
            height: 40,
            width: 60,
          }}
          onClick={() => {
            resetTimer();
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default CountDown;
