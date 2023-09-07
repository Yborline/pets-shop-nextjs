import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { DivImage, Div, DivLeft, DivRight } from "./GallaryComponent.styled";
import { ColorRing } from "react-loader-spinner";
import { IoMdArrowForward, IoMdArrowBack } from "react-icons/io";

const GallaryComponent = ({ image, name }) => {
  // console.log(image);
  return (
    <Div>
      <Carousel
        // width={windowWidth.current < 768 ? "70%" : "100%"}
        style={{ maxWidth: "100px" }}
        showThumbs={true}
        showArrows={true}
        dynamicHeight={true}
        infiniteLoop={true}
        chevronWidth={500}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <DivLeft onClick={clickHandler}>
              <IoMdArrowBack style={{ color: "black" }} size={50} />
            </DivLeft>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <DivRight onClick={clickHandler}>
              <IoMdArrowForward style={{ color: "black" }} size={50} />
            </DivRight>
          );
        }}
        renderThumbs={() =>
          image.map((item) => (
            <Image
              key={item.public_id}
              width={100}
              height={80}
              src={item.secure_url}
              alt={name}
            />
          ))
        }
      >
        {image?.map((item) => (
          <DivImage key={item.public_id}>
            <Image
              src={
                item.secure_url ? (
                  item.secure_url
                ) : (
                  <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={[
                      "#e15b64",
                      "#f47e60",
                      "#f8b26a",
                      "#abbd81",
                      "#849b87",
                    ]}
                  />
                )
              }
              alt={name}
              fill
              // srcset="small.jpg 500w, medium.jpg 1000w, large.jpg 1500w"
              sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 100vw,
              33vw"
              style={{ objectFit: "scale-down", zIndex: "3" }}
            />
          </DivImage>
        ))}
      </Carousel>
    </Div>
  );
};
export default GallaryComponent;
