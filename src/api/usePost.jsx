import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost } from "./api";

export const createPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData) => {
      return addPost(postData);
    },
    onSuccess: (data) => {
      console.log("🚀 ~ createPost ~ data:", data);
      queryClient.invalidateQueries("posts");
    },
    onError: (error) => {
      console.log("🚀 ~ createPost ~ error:", error);
    },
  });
};
