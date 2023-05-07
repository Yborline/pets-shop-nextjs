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
import { ArrowButton, DivMain } from "./HomeCarousel.styled";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeCarousel = ({ clothes }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <DivMain style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
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
          <Link href={`/clothes/${item._id}`} key={item._id}>
            <div
              style={{
                height: 200,
                background: `url(${item.image[0].secure_url})`,
                backgroundPosition: "50% 50%",
                backgroundSize: "cover",
              }}
            ></div>
          </Link>
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
