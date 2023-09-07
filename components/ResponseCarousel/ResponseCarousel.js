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

const ResponseCarousel = ({ user, notifySuccess }) => {
  const [image, setImage] = useState({});
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const width = useWindowWidth();
  const chevronWidth = 50;
  const [files, setFiles] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getImage = async () => {
      const { data } = await getImagesHome();
      if (data) {
        const findHome = data.filter((item) => item.model === "home");
        setImage(...findHome);
      }
    };
    getImage();
  }, []);

  const { images } = image || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addImagesHome(formDataAppend(files)));
    notifySuccess("Ваші зображення добавлені");
  };

  const deleteImages = () => {
    console.log(image._id);
    dispatch(deleteImagesHome(image._id));
    notifySuccess("Ваші зображення dddddddd");
  };

  return (
    <>
      {images && <H3>Наші відгуки</H3>}
      <DivMain style={{ padding: `0 ${chevronWidth}px`, overflowY: "hidden" }}>
        <ItemsCarousel
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
                  width={
                    width < 380
                      ? 220
                      : width < 768
                      ? 280
                      : width < 1280
                      ? 450
                      : 600
                  }
                  height={300}
                  alt="response"
                  src={item.secure_url}
                />
              </DivItem>
            ))}
        </ItemsCarousel>
      </DivMain>
      {user === "admin" && (
        <>
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
      )}
    </>
  );
};

export default ResponseCarousel;
