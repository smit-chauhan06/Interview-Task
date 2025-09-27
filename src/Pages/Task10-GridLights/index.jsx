import React, { useEffect, useState } from "react";

const GridLights = () => {
  const [data] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [selected, setSelected] = useState([]);
  console.log("🚀 ~ GridLights ~ selected:", selected);

  const handleToggle = (id) => {
    setSelected((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (selected.length === 0) return;

    const interval = setInterval(() => {
      setSelected((prev) => {
        const copy = [...prev];
        copy.pop(); // remove last item
        return copy;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          width: "50%",
        }}
      >
        {data.map((item) => {
          return (
            <div
              key={item}
              style={{
                padding: "20px",
                border: "1px solid black",
                backgroundColor: selected.includes(item)
                  ? "green"
                  : "transparent",
                cursor: "pointer",
              }}
              onClick={() => {
                if (!selected.includes(item)) {
                  handleToggle(item);
                }
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
