import React, { useState } from "react";

const checkboxArr = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Mobile Phones",
        children: [
          { id: 3, name: "iPhone" },
          { id: 4, name: "Samsung" },
        ],
      },
      {
        id: 5,
        name: "Laptops",
        children: [
          { id: 6, name: "MacBook" },
          { id: 7, name: "Dell" },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Clothing",
    children: [
      {
        id: 9,
        name: "Men",
        children: [
          { id: 10, name: "Shirts" },
          { id: 11, name: "Jeans" },
        ],
      },
      {
        id: 12,
        name: "Women",
        children: [
          { id: 13, name: "Dresses" },
          { id: 14, name: "Tops" },
        ],
      },
    ],
  },
];

const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => {
      const copy = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        node?.children.forEach((child) => {
          copy[child.id] = isChecked;
          if (child.children) {
            updateChildren(child);
          }
        });
      };

      updateChildren(node);

      const verifyChecked = (node) => {
        const allChildrenChecked = node.children.every(
          (child) => prev[child.id]
        );

        copy[node.id] = allChildrenChecked;
      };

      checkboxArr.forEach((node) => verifyChecked(node));
      verifyChecked();

      return copy;
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            paddingLeft: "20px",
          }}
        >
          <input
            type="checkbox"
            checked={checked[item.id] || false}
            onChange={(e) => {
              handleChange(e.target.checked, item);
            }}
          />
          <span>{item.name}</span>
          {item.children && (
            <Checkboxes
              data={item.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const NestedCheckBoxes = () => {
  const [checked, setChecked] = useState({});
  console.log("🚀 ~ NestedCheckBoxes ~ checked:", checked);

  return (
    <div>
      <Checkboxes
        data={checkboxArr}
        checked={checked}
        setChecked={setChecked}
      />
    </div>
  );
};

export default NestedCheckBoxes;
