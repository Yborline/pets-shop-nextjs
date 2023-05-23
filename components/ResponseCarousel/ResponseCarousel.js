import { useEffect } from "react";
import { deleteImagesHome, getImagesHome } from "../../services/api";
import { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useWindowWidth } from "@react-hook/window-size";
import { addImagesHome } from "../../services/api";
import {
  ArrowButton,
  DivMain,
  Img,
  DivItem,
  H3,
} from "./ResponseCarousel.styled";
import { useDispatch } from "react-redux";
import { formDataAppend } from "./formDataAppend";

const ResponseCarousel = () => {
  const [image, setImage] = useState({});
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const width = useWindowWidth();
  const chevronWidth = 50;
  const [files, setFiles] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getImage = async () => {
      const { data } = await getImagesHome();
      const findHome = data.filter((item) => item.model === "home");
      setImage(...findHome);
    };
    getImage();
  }, []);

  const { images } = image || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addImagesHome(formDataAppend(files)));
  };

  const deleteImages = () => {
    console.log(image._id);
    dispatch(deleteImagesHome(image._id));
  };

  return (
    <>
      <H3>Наші відгуки</H3>
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
          numberOfCards={1}
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
          {images &&
            images.map((item) => (
              <DivItem key={item.public_id}>
                <Img
                  width={600}
                  height={300}
                  alt="clothes"
                  src={item.secure_url}
                />
              </DivItem>
            ))}
        </ItemsCarousel>
      </DivMain>
      <form onSubmit={handleSubmit}>
        <label>image</label>
        <input
          multiple
          id="image"
          name="image"
          type="file"
          onChange={(event) => {
            setFiles(event.target.files);
          }}
        />
        <button type="submit">ok</button>
      </form>
      <button type="button" onClick={deleteImages}>
        delete
      </button>
    </>
  );
};

export default ResponseCarousel;
