import Heading from "../components/Heading/Heading";
import Head from "next/head";
import { useState, useEffect } from "react";
import ClothesListType from "../components/ClothesList/ClothesListType";
import Modal from "../components/Modal";
import ClothesForm from "../components/ClothesForm/ClothesForm";

import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchClothes } from "../redux/clothes/clothes-operations";

// export const getStaticProprs = async (context) => {
//   const response = await fetch(
//     "https://petshop-api-dqwd.onrender.com/api/clothes"
//   );
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { clothes: data },
//   };
// };

const Clothes = () => {
  return (
    <>
      <Head>
        <title>Clothes</title>
      </Head>

      <ClothesListType />
    </>
  );
};

export default Clothes;
