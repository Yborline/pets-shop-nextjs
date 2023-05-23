// import Image from "next/image";
// import React, { useState } from "react";

// import InfiniteCarousel from "react-leaf-carousel";

// const HomeCarousel = ({ clothes }) => {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 40;
//   return (
//     <div style={{ padding: `0 ${chevronWidth}px`, width: "1000px" }}>
//       <InfiniteCarousel
//         breakpoints={[
//           {
//             breakpoint: 500,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//             },
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//             },
//           },
//         ]}
//         dots={true}
//         showSides={true}
//         sidesOpacity={0.5}
//         sideSize={0.1}
//         slidesToScroll={4}
//         slidesToShow={4}
//         scrollOnDevice={true}
//       >
//         {clothes.map((item) => (
//           <div
//             key={item._id}
//             // style={{
//             //   height: 200,
//             //   background: `url(${item.image[0].secure_url})`,
//             //   backgroundPosition: "50% 50%",
//             //   backgroundSize: "cover",
//             // }}
//           >
//             <Image alt="" src={item.image[0].secure_url} />
//           </div>
//         ))}
//         {/* <div
//           style={{
//             height: 200,
//             background: "url(https://placeimg.com/380/200/nature)",
//           }}
//         >
//           First card
//         </div>
//         <div style={{ height: 200, background: "#EEE" }}>Second card</div>
//         <div style={{ height: 200, background: "#EEE" }}>Third card</div>
//         <div style={{ height: 200, background: "#EEE" }}>Fourth card</div> */}
//       </InfiniteCarousel>
//     </div>
//   );
// };

// export default HomeCarousel;

import Link from "next/link";
import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import {
  ArrowButton,
  DivMain,
  DivPrice,
  ImageLink,
  DivItem,
} from "./HomeCarousel.styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import OnSale from "../OnSale/OnSale";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";

const HomeCarousel = ({ clothes }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const width = useWindowWidth();
  const chevronWidth = 50;
  console.log(clothes);
  return (
    <DivMain style={{ padding: `0 ${chevronWidth}px`, overflowY: "hidden" }}>
      <ItemsCarousel
        style={
          //   "display:flex",
          // "justify-content: center",
          {
            overflowY: "hidden",
          }
        }
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={
          width < 768 ? 1 : width < 1200 ? 3 : width < 1620 ? 5 : 7
        }
        gutter={20}
        leftChevron={
          <ArrowBackIosIcon>
            <ArrowButton />
          </ArrowBackIosIcon>
        }
        rightChevron={
          <ArrowForwardIosIcon>
            <ArrowButton />
          </ArrowForwardIosIcon>
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

                  // background: `url(${item.image[0]?.secure_url})`,
                  // backgroundPosition: "50% 50%",
                  // backgroundSize: "contain",
                  // backgroundRepeat: "no-repeat",
                }}
                width={200}
                height={200}
                alt="clothes"
                src={item.image[0]?.secure_url}
              />
              {/* <div
                style={{
                  overflowY: "hidden",
                  height: 150,

                  background: `url(${item.image[0]?.secure_url})`,
                  backgroundPosition: "50% 50%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div> */}
            </ImageLink>
            <DivPrice>
              <Link href={`/clothes/${item._id}`}>
                <h4>{item.name}</h4>
              </Link>
            </DivPrice>
          </DivItem>
        ))}
        {/* <div
          style={{
            height: 200,
            background: "url(https://placeimg.com/380/200/nature)",
          }}
        >
          First card
        </div>
        <div style={{ height: 200, background: "#EEE" }}>Second card</div>
        <div style={{ height: 200, background: "#EEE" }}>Third card</div>
        <div style={{ height: 200, background: "#EEE" }}>Fourth card</div> */}
      </ItemsCarousel>
    </DivMain>
  );
};

export default HomeCarousel;
