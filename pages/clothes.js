import Heading from "../components/Heading/Heading";
import Head from "next/head";
import { useState, useEffect } from "react";
import ClothesList from "../components/ClothesList/ClothesListType";

import axios from "axios";

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
  const [clothes, setClothes] = useState(null);

  useEffect(() => {
    axios
      .get(`https://petshop-api-dqwd.onrender.com/api/clothes`)
      .then((res) => {
        const persons = res.data.data.clothes;
        console.log(persons);
        setClothes(persons);
      });
  }, []);
  console.log(clothes);

  return (
    <>
      <Head>
        <title>Clothes</title>
      </Head>
      <Heading text="Hello World" />
      <Heading tag="h2" text="list Posts: ..." />
      <ClothesList clothes={clothes} />

      {/* <ul>
        {clothes &&
          clothes.map(({ name, price, _id }) => <li key={_id}> {name}</li>)}
      </ul> */}
    </>
  );
};

export default Clothes;
