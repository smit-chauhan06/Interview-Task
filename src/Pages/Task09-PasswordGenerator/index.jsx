import React, { useEffect, useState } from "react";
import { useUser } from "../Task11-Context";

const PasswordGenerator = () => {
  const [range, setRange] = useState(6);

  const [generatedPassword, setGeneratedPassword] = useState("");

  const { user } = useUser();
  console.log("🚀 ~ PasswordGenerator ~ user:", user);

  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      name: "Include lowercase",
      selected: true,
    },
    {
      id: 2,
      name: "Include uppercase",
      selected: false,
    },
    {
      id: 3,
      name: "Include numbers",
      selected: false,
    },
    {
      id: 4,
      name: "Include symbols",
      selected: false,
    },
  ]);

  const handleCheckBox = (value, name) => {
    console.log("🚀 ~ handleCheckBox ~ value:", value);
    const newData = checkboxes.map((data) => {
      if (name === data.name) {
        if (!data.selected) {
          return {
            ...data,
            selected: true,
          };
        } else {
          return {
            ...data,
            selected: false,
          };
        }
      } else {
        return data;
      }
    });
    setCheckboxes(newData);
  };

  const generateRandomString = (
    len = 6,
    upperCase = false,
    lowerCase = true,
    numbers = false,
    symbols = false
  ) => {
    let chars = "";
    if (lowerCase) {
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (upperCase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      chars += "1234567890";
    }
    if (symbols) {
      chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    let result = "";

    for (let i = 0; i <= len; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
    setGeneratedPassword(result);
  };

  const generatePasswordHandle = () => {
    const selected = checkboxes.map((data) => {
      if (data.selected === true) {
        return data.name;
      }
    });

    generateRandomString(
      range,
      selected?.includes("Include upercase"),
      selected?.includes("Include lowercase"),
      selected?.includes("Include numbers"),
      selected?.includes("Include symbols")
    );
  };

  return (
    <div className="flex justify-center">
      <div className="text-center mt-[10px] bg-red-200 w-[50%] rounded-[10px] p-[20px]">
        <span className="text-3xl">Password Generator</span>
        <div className="p-[10px] flex items-center gap-[20px]">
          <input
            type="range"
            min="6"
            onChange={(e) => {
              setRange(e.target.value);
            }}
            value={range}
            max="100"
            class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span>{range}</span>
        </div>
        <div className="p-[10px] grid grid-cols-2">
          {checkboxes?.map((data) => {
            return (
              <div className="flex gap-[5px]">
                <input
                  type="checkbox"
                  className="mt-[5px]"
                  checked={data?.selected}
                  onChange={(e) => {
                    handleCheckBox(e.target.checked, data.name);
                  }}
                />
                <span>{data?.name}</span>
              </div>
            );
          })}
        </div>
        <div className="p-[10px] mt-[20px]">
          <span>{generatedPassword}</span>
        </div>
        <div className="p-[10px] mt-[20px]">
          <button
            className="w-[200px] p-[5px] bg-black rounded-[20px] text-white"
            onClick={() => {
              generatePasswordHandle();
            }}
          >
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
