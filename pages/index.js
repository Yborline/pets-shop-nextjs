import Head from "next/head";
import Image from "next/image";

import Heading from "../components/Heading/Heading";

import { useState } from "react";
import HomeList from "../components/HomeList/HomeList";
import Counter from "../components/Counter/Counter";
import dog from "../public/photo/dog.png";
import { Div, Container, DivList } from "./index.styled";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Pet Shop</title>
      </Head>
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
