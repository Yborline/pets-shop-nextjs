import HomeItem from "./HomeItem/HomeItem";
import { Ul, Div } from "./HomeList.styled";
import clothesMenu from "../clothesMenu/clothesMenu";

const HomeList = () => {
  return (
    <>
      <Ul>
        {clothesMenu.map(({ type, id, title, page }) => (
          <HomeItem key={id} page={page} type={type} title={title} />
        ))}
      </Ul>
    </>
  );
};

export default HomeList;
