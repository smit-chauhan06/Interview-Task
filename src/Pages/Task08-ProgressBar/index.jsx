import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 10;
        } else {
          return 100;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center">
      <div
        style={{
          width: "50vw",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "green",
            borderRadius: "20px",
            textAlign: "center",
            color: "white",
            padding: "5px",
            transition: "width 0.5s ease",
            width: `${percentage}%`,
          }}
        ></div>
        {percentage} %
      </div>
    </div>
  );
};

export default ProgressBar;
