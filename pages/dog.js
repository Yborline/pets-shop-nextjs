import Heading from "../components/Heading/Heading";
import Head from "next/head";
import axios from "axios";
import xml from "../services/eat.xml";
import { parseString } from "xml2js";

const Clothes = ({ data }) => {
  console.log(`lol ${JSON.stringify(data)}`);

  return (
    <>
      <Head>
        <title>Dog</title>
      </Head>
      <Heading text="Hello" />
      <Heading tag="h2" text="Ця сторінка ще в розробці" />
    </>
  );
};
export async function getServerSideProps() {
  try {
    const response = await axios.get("https://c.suziria.ua/prom.xml", {
      headers: {
        "Content-Type": "text/xml",
      },
    });
    const xmlData = response.data;

    const jsonData = await new Promise((resolve, reject) => {
      parseString(xmlData, (err, result) => {
        if (err) {
          console.error("Error parsing XML:", err);
          reject(err);
        } else {
          resolve(result);
        }
      });
    });

    // Виведення даних у консоль для перевірки
    console.log("JSON Data:", jsonData);

    return {
      props: {
        data: jsonData.yml_catalog.shop[0].offers[0],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default Clothes;
