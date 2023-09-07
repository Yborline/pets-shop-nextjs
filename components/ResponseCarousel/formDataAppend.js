import { useSelector } from "react-redux";

export const formDataAppend = (img) => {
  const data = new FormData();

  data.append("model", "home");

  // data.append("image", img);
  for (let file of img) {
    data.append("images", file);
  }

  return data;
};
