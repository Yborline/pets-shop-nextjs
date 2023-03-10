import HomeItem from "./HomeItem/HomeItem";
import { Ul, Div } from "./HomeList.styled";
import clothesMenu from "../ClothesMenu/ClothesMenu";

const HomeList = () => {
  return (
    <>
      <Ul>
        {clothesMenu.map(({ path, id, title }) => (
          <HomeItem key={id} path={path} title={title} />
        ))}
      </Ul>
    </>
  );
};

export default HomeList;
