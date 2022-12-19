import HomeItem from "./HomeItem/HomeItem";
import { Ul, Div } from "./HomeList.styled";
const HomeList = () => {
  const list = [
    { id: 1, title: "Overalls", path: "/clothes/overalls/overalls" },
    { id: 2, title: "Hoodies", path: "/clothes/hoodies/hoodies" },
    { id: 3, title: "T-shirts", path: "/clothes/t-shirts/t-shirts" },
    { id: 4, title: "Suits", path: "/clothes/suits/suits" },
    {
      id: 5,
      title: "Windbreakers",
      path: "/clothes/windbreakers/windbreakers",
    },
    { id: 6, title: "Dresses", path: "/clothes/dresses/dresses" },
    { id: 7, title: "Hats", path: "/clothes/hats/hats" },
    { id: 8, title: "Footwear", path: "/clothes/footwear/footwear" },
    { id: 9, title: "Couch/plaid", path: "/clothes/couch/couch" },
    { id: 10, title: "Diapers", path: "/clothes/diapers/diapers" },
    {
      id: 11,
      title: "For large dogs",
      path: "/clothes/forLargeDogs/forLargeDogs",
    },
  ];

  return (
    <>
      <Ul>
        {list.map(({ path, id, title }) => (
          <HomeItem key={id} path={path} title={title} />
        ))}
      </Ul>
    </>
  );
};

export default HomeList;
