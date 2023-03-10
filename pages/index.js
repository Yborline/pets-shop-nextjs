import Head from "next/head";
import Image from "next/image";

import Heading from "../components/Heading/Heading";

import { useState, useContext, useEffect } from "react";
import HomeList from "../components/HomeList/HomeList";
import Counter from "../components/Counter/Counter";
import dog from "../public/photo/dog.png";
import { Div, Container, DivList } from "./index.styled";
import FormAdd from "../components/FormAdd/FormAdd";
import authOperations from "../redux/auth/auth-operatins";
import { Provider, useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Head>
        <title>Pet Shop</title>
      </Head>
      {/* <FormAdd /> */}
      {/* <Heading text="Welcome to PetShop" /> */}
      <Div>
        <Image
          src={dog}
          width={400}
          height={300}
          alt="dog"
          placeholder="blur"
        />
      </Div>

      <DivList>
        <HomeList />
      </DivList>
    </Container>
  );
}
