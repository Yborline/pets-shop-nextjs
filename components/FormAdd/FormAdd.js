import { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api";

const FormAdd = () => {
  const getClothes = async () => {
    const { data } = await axios.get("/clothes");

    return console.log(data);
  };

  const [files, setFiles] = useState("");

  const handleChange = () => {
    setFiles(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getClothes();
    const data = new FormData();
    data.append("image", files);
  };

  return (
    <form id="form" encType="multipart/form-data">
      <input name="image" type="file" onChange={handleChange} multiple />
      <button type="button" onSubmit={handleSubmit}>
        Отправить
      </button>
    </form>
  );
};

export default FormAdd;
