import Link from "next/link";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import {
  ArrowButton,
  DivMain,
  DivPrice,
  ImageLink,
  DivItem,
  ArrowRight,
  ArrowLeft,
} from "./HomeCarousel.styled";

import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";

const HomeCarousel = ({ clothes }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const width = useWindowWidth();
  const chevronWidth = 50;
  return (
    <DivMain style={{ padding: `0 ${chevronWidth}px`, overflowY: "hidden" }}>
      <ItemsCarousel
        style={{
          overflowY: "hidden",
        }}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={
          width < 768 ? 1 : width < 1200 ? 3 : width < 1620 ? 5 : 7
        }
        gutter={20}
        leftChevron={
          <ArrowLeft>
            <ArrowButton />
          </ArrowLeft>
        }
        rightChevron={
          <ArrowRight>
            <ArrowButton />
          </ArrowRight>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {clothes.map((item) => (
          <DivItem key={item._id}>
            <ImageLink href={`/clothes/${item._id}`}>
              <Image
                style={{
                  overflowY: "hidden",

                  objectFit: "cover",
                }}
                width={200}
                height={200}
                alt="clothes"
                src={item.image[0]?.secure_url}
              />
            </ImageLink>
            <DivPrice>
              <Link href={`/clothes/${item._id}`}>
                <h4>{item.name}</h4>
              </Link>
            </DivPrice>
          </DivItem>
        ))}
      </ItemsCarousel>
    </DivMain>
  );
};

export default HomeCarousel;
