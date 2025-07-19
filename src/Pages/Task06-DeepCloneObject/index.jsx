import React from "react";

const DeepClone = () => {
  const original = {
    name: "John",
    age: 30,
    isActive: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
      street: "123 Main St",
      city: "New York",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    getDetails: function () {
      return `${this.name}, ${this.age}`;
    },
    createdAt: new Date(),
    nestedArray: [
      {
        id: 1,
        tags: ["a", "b"],
      },
      {
        id: 2,
        tags: ["x", "y"],
      },
    ],
  };
  console.log("🚀 ~ DeepClone ~ original:", original);

  const createDeepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    const newObj = Array.isArray(obj) ? [] : {};
    const keys = Object.keys(obj);

    for (let i = 0; i < keys.length; i++) {
      newObj[keys[i]] = createDeepClone(obj[keys[i]]);
    }

    return newObj;
  };

  console.log(createDeepClone(original));

  return <div>DeepClone</div>;
};

export default DeepClone;
