import React, { useState } from "react";

const ToDoList = () => {
  const [value, setValue] = useState("");

  const listData = JSON.parse(localStorage.getItem("ToDoList")) || [];
  console.log("🚀 ~ ToDoList ~ listData:", listData);

  const [list, setList] = useState(listData);
  const [id, setId] = useState("");

  const addInList = () => {
    let newData;
    if (id) {
      newData = listData.map((item) =>
        item.id === id ? { ...item, title: value } : item
      );
      setId("");
    } else {
      newData = [
        ...listData,
        {
          id: new Date().getTime(),
          title: value,
        },
      ];
    }
    setList(newData);
    localStorage.setItem("ToDoList", JSON.stringify(newData));
    setValue("");
  };

  const deleteItem = (id) => {
    const newData = listData.filter((data) => data.id !== id);
    setList(newData);
    localStorage.setItem("ToDoList", JSON.stringify(newData));
  };

  const handleMarkAsDone = (item) => {
    const newData = listData.filter((data) => data.id !== item.id);
    const updatedData = [...newData, { ...item, isDone: true }];
    setList(updatedData);
    localStorage.setItem("ToDoList", JSON.stringify(updatedData));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1>TO DO LIST</h1>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          width: "20vw",
          margin: "10px 0px",
          padding: "10px 10px",
        }}
      />
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "5px 10px",
          borderRadius: "10px",
          width: "200px",
        }}
        onClick={() => {
          addInList();
        }}
      >
        Add
      </button>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "60vw",
        }}
      >
        {list?.map((data) => {
          return (
            <div
              key={data?.id}
              style={{
                backgroundColor: "whitesmoke",
                padding: "5px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            >
              <span>{data?.title}</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    setId(data?.id);
                    setValue(data?.title);
                  }}
                >
                  Edit
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    border: "1px solid black",
                  }}
                  onClick={() => {
                    if (data?.isDone) {
                      return null;
                    }
                    handleMarkAsDone(data);
                  }}
                >
                  {data?.isDone ? "Already Done" : "Mark as done"}
                </button>
                <button
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "10px",
                  }}
                  onClick={() => {
                    deleteItem(data?.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
