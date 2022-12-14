import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Heading from "../components/Heading/Heading";
import s from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={s.wrapper}>
      <Heading text="Hello WOrld-index" />
    </div>
  );
}
