import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addPost, fetchPosts } from "../api/api";
import { createPost } from "../api/usePost";
import { useState } from "react";

const TanStack = () => {
  const createNewPost = createPost();

  const [value, setValue] = useState();

  const { data, isLoading, isError, error, status } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const updatData = { title: value, tag: ["Hello"] };

  const submit = () => {
    createNewPost.mutate(updatData, {
      onSuccess: (data) => {
        console.log("🚀 ~ TanStack ~ data:", data);
      },
      onError: (error) => {
        console.log("🚀 ~ submit ~ error:", error);
      },
    });
  };

  const [sampleData, setSampleData] = useState([
    {
      id: 1,
      name: "Smit",
    },
    {
      id: 2,
      name: "Meet",
    },
  ]);
  console.log("🚀 ~ TanStack ~ sampleData:", sampleData);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      <button
        type="submit"
        onClick={() => {
          // submit();
          setSampleData((data) => {
            return data?.map((item) =>
              item?.name === "Smit" ? { ...item, name: "Meet" } : item
            );
          });
        }}
      >
        Submit
      </button>

      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 10,
          }}
        >
          {data.map((data, index) => (
            <div
              key={data?.id}
              style={{
                border: "1px solid red",
                padding: 10,
              }}
            >
              <h4>{data?.title}</h4>
              {data?.tags?.map((data, index) => (
                <p key={index}>{data}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TanStack;
