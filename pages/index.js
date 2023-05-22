import Head from "next/head";
import Image from "next/image";
import _ from "lodash";
import Heading from "../components/Heading/Heading";

import { useState, useContext, useEffect } from "react";
import HomeList from "../components/HomeList/HomeList";
import Counter from "../components/Counter/Counter";
import dog from "../public/photo/dog.png";
import {
  Div,
  Container,
  DivList,
  Ul,
  DivSpinner,
} from "../styles/index.styled";
import FormAdd from "../components/FormAdd/FormAdd";
import authOperations from "../redux/auth/auth-operatins";
import { Provider, useDispatch, useSelector } from "react-redux";
import {
  // deleteClothes,
  fetchAllClothes,
  filterSearch,
} from "../redux/clothes/clothes-operations";
import {
  getAllClothes,
  getClothes,
  getLoadingCloth,
} from "../redux/clothes/clothes-selector";
import { getUser } from "../redux/auth/auth-selectors";
import ClothesItem from "../components/ClothesList/ClothesList/ClothesItem/ClothesItem";
import { usePageLoading } from "../hook";
import { ColorRing } from "react-loader-spinner";
import ctxInput from "../components/context/filterContext";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";

export default function Home() {
  const { input, inputIn } = useContext(ctxInput);
  const { isPageLoading } = usePageLoading();
  const cloth = useSelector(getClothes);
  const loadingCloth = useSelector(getLoadingCloth);
  const dispatch = useDispatch();
  const clothes = useSelector(getAllClothes);
  const { user } = useSelector(getUser);

  // console.log(_.sampleSize(clothes, 3)); // 👉️ [ 'bobby', 'com' ]
  // console.log(_.sampleSize(clothes, 5)); // 👉️ [ 'com', '.' ]

  useEffect(() => {
    // dispatch(fetchAllClothes());
    // dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    if (input !== "") {
      dispatch(filterSearch({ text: input, page: "1", limit: 5 }));
    }
  }, [dispatch, input]);
  // console.log(cloth);

  return (
    <Container>
      <Head>
        <title>Pet Shop</title>
      </Head>
      {/* <FormAdd /> */}
      {/* <Heading text="Welcome to PetShop" /> */}
      {/* <Div>
        <Image
          src={dog}
          width={400}
          height={300}
          alt="dog"
          placeholder="blur"
        />
      </Div> */}

      {isPageLoading ? (
        <DivSpinner>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </DivSpinner>
      ) : (
        <Ul>
          {cloth.length !== 0 ? (
            <>
              {" "}
              {input !== "" &&
                cloth.length >= 1 &&
                cloth.length < 6 &&
                !isPageLoading &&
                cloth.map((item) => (
                  <ClothesItem
                    type={user}
                    id={item._id}
                    key={item._id}
                    name={item.name}
                    active={item.active}
                    code={item.code}
                    image={item.image[0]}
                    owner={item.owner}
                    model={item.model}
                    discount={item.discount}
                    prices={
                      item.allprice?.xs
                      // user === "wholesaler"
                      //   ? item.allprice?.xs?.opt
                      //   : item.allprice?.xs?.price
                    }
                    // dell={() => dispatch(deleteClothes(item._id))}
                  />
                ))}
              {/* <Ul>
            {clothes &&
              clothes.map(
                (item) =>
                  item.discount > 0 && (
                    <ClothesItem
                      type={user}
                      id={item._id}
                      key={item._id}
                      name={item.name}
                      active={item.active}
                      code={item.code}
                      image={item.image}
                      owner={item.owner}
                      model={item.model}
                      discount={item.discount}
                      prices={
                        item.allprice?.xs
                        // user === "wholesaler"
                        //   ? item.allprice?.xs?.opt
                        //   : item.allprice?.xs?.price
                      }
                      // dell={() => dispatch(deleteClothes(item._id))}
                    />
                  )
              )}
          </Ul> */}
            </>
          ) : (
            input !== "" && <h2>По вашому запиту нічого не знайдено!</h2>
          )}
        </Ul>
      )}
      <HomeCarousel clothes={_.sampleSize(clothes, 20)} />

      {/* <DivList>
        <HomeList />
      </DivList> */}
    </Container>
  );
}
