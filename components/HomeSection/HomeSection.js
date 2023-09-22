import Image from "next/image";
import {
  Section,
  DivText,
  ButtonLink,
  DivImage,
  P,
  H2,
} from "./HomeSection.styled";
import dogHome from "../../public/photo/dogHome.png";
import Link from "next/link";
import Button from "../Button/Button";
import { useWindowWidth, usesWindowWidth } from "@react-hook/window-size";
import Heading from "../Heading/Heading";
import ButtonPulse from "../ButtonPulse/ButtonPulse";

const HomeSection = () => {
  const width = useWindowWidth();

  return (
    <>
      {" "}
      <Heading text="Welcome to PetShop" />
      {width < 768 && (
        <ButtonLink href="/clothes">
          <ButtonPulse
            width={"300px"}
            height={"40px"}
            text="КОЛЕКЦІЯ ОДЯГУ"
          ></ButtonPulse>
        </ButtonLink>
      )}
      <Section>
        {width < 768 && <H2>UA.Petshop цінує індивідуальність</H2>}
        <DivImage>
          <Image
            alt="dog in the car"
            src={dogHome}
            width={width < 768 ? 250 : width < 1000 ? 330 : 450}
            height={width < 768 ? 250 : width < 1000 ? 330 : 450}
          />
        </DivImage>
        <DivText>
          {width > 768 && <h2>UA.Petshop цінує індивідуальність</h2>}
          <P>
            Ми прагнемо задовольнити всі потреби Вашого улюбленця, незалежно від
            його розміру. Розуміючи, що кожна тварина має свою унікальну
            фізіологію, пропонуємо замовити індивідуальний розмір одягу, a також
            маємо додаткові опції на зміну фурнітури, виду та кольору тканини,
            щоб створити унікальний образ.
            <br />
            Можете вибрати з різноманітних фурнітурних елементів, щоб
            персоналізувати одяг вашого хвостика. Крім того, Ви маєте можливість
            відібрати з широкої палітри кольорів, які найкраще підходять Вашому
            смаку та характеру улюбленця. <br />
            Наш магазин також пропонує різноманітні тканини для виготовлення
            одягу. Ви можете обрати м&apos;яку, теплу для холодних місяців або
            легку, дихаючу для літнього періоду. UA.Petshop працює з
            високоякісними матеріалами, щоб забезпечити комфорт та довговічність
            одягу тварини.
            <br />
            Ваш улюбленець заслуговує на найкраще, тому ми прагнемо задовольнити
            всі бажання та забезпечити насолоду від покупки. Гарантуємо якість,
            стиль та індивідуальний підхід до кожного замовлення.
            <br />
            Зверніть увагу, що замовлення індивідуального розміру може зайняти
            трохи більше часу на обробку та виготовлення. Ми докладемо всіх
            зусиль, щоб кнайшвидше виконати замовлення і доставити його Вам.
            <br />
            !!! Щоб правильно виміряти улюбленця перейдіть на сторінку
            <ButtonLink href="/aboutUs/measurements">
              <ButtonPulse
                width={"400px"}
                height={"40px"}
                text="ЗРОБИТИ ЗАМІРИ"
              ></ButtonPulse>
            </ButtonLink>
          </P>
        </DivText>
      </Section>
    </>
  );
};

export default HomeSection;
