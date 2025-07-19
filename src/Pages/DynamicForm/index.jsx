import React, { useState } from "react";
import { data } from "react-router-dom";

const DynamicForm = () => {
  const [forms, setForms] = useState([
    {
      name: "",
      email: "",
      errors: {},
    },
  ]);
  console.log("🚀 ~ DynamicForm ~ forms:", forms);

  const handleChange = (index, field, value) => {
    const updatedForm = [...forms];
    updatedForm[index][field] = value;
    setForms(updatedForm);
  };

  const validation = () => {
    const updatedForm = forms.map((data) => {
      const errors = {};

      if (!data.name.trim()) {
        errors.name = "Name is required";
      } else if (data.email.trim()) {
        errors.email = "Email is required";
      }
      return { ...forms, errors };
    });
    setForms(updatedForm);
  };

  return (
    <div
      style={{
        witdh: "100%",
        height: "100%",
      }}
    >
      {forms.map((data, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: 10,
            marginTop: 20,
          }}
        >
          <input
            placeholder="name"
            value={data.name}
            onChange={(e) => {
              handleChange(index, "name", e.target.value);
            }}
          />
          {data.errors.name && <p>{data.errors.name}</p>}
          <input
            placeholder="email"
            value={data.email}
            onChange={(e) => {
              handleChange(index, "email", e.target.value);
            }}
          />
          {data.errors.email && <p>{data.errors.email}</p>}
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          gap: 10,
        }}
      >
        <button
          style={{
            paddingTop: 3,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 3,
          }}
          onClick={() => {
            validation();
          }}
        >
          Submit
        </button>
        <button
          style={{
            paddingTop: 3,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 3,
          }}
          onClick={() => {
            setForms([...forms, { name: "", email: "", errors: {} }]);
          }}
        >
          Add new
        </button>
      </div>
    </div>
  );
};

export default DynamicForm;
