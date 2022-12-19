import Heading from "../components/Heading/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="404" />
      <Heading tag="h2" text="There is no such page" />
    </>
  );
};

export default Error;
