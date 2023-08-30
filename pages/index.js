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
  H2,
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
  getLoadingAllCloth,
  getLoadingCloth,
} from "../redux/clothes/clothes-selector";
import { getUser } from "../redux/auth/auth-selectors";
import ClothesItem from "../components/ClothesList/ClothesList/ClothesItem/ClothesItem";
import { usePageLoading } from "../hooks/hook";
import Spinner from "../components/Spinner/Spinner";
import ctxInput from "../context/filterContext";
import HomeCarousel from "../components/HomeCarousel/HomeCarousel";
import HomeSection from "../components/HomeSection/HomeSection";
import ResponseCarousel from "../components/ResponseCarousel/ResponseCarousel";
import { notifySuccessAll } from "../notify/notify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const { input, inputIn } = useContext(ctxInput);

  const { isPageLoading } = usePageLoading();
  const cloth = useSelector(getClothes);
  const loadingCloth = useSelector(getLoadingCloth);
  const LoadingAllCloth = useSelector(getLoadingAllCloth);
  const dispatch = useDispatch();
  const clothes = useSelector(getAllClothes);
  const { user } = useSelector(getUser);

  useEffect(() => {
    if (input !== "") {
      dispatch(filterSearch({ text: input, page: "1", limit: 5 }));
    }
  }, [dispatch, input]);

  return (
    <Container>
      <Head>
        <title>Pet Shop</title>
      </Head>

      {loadingCloth ? (
        <Spinner />
      ) : cloth.length !== 0 && !LoadingAllCloth ? (
        <Ul>
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
        </Ul>
      ) : (
        input !== "" && <H2>По вашому запиту нічого не знайдено!</H2>
      )}

      <HomeSection />
      {isPageLoading && <Spinner />}
      {LoadingAllCloth ? (
        <Spinner />
      ) : (
        <>
          <HomeCarousel clothes={_.sampleSize(clothes, 20)} />
          <ResponseCarousel user={user} notifySuccess={notifySuccessAll} />
        </>
      )}

      {/* <DivList>
        <HomeList />
      </DivList> */}
    </Container>
  );
}
