import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Div, DivMain, DivImage, Ul } from "./ClothesInfo.styled";
import { getUser } from "../../redux/auth/auth-selectors";
import { useEffect, useState } from "react";
import authOperations from "../../redux/auth/auth-operatins";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { changeShoppingCard } from "../../redux/clothes/clothes-actions";
import { getClothesId, getBasket } from "../../redux/clothes/clothes-selector";

const ClothesInfo = () => {
  const size = [
    "xs",
    "s",
    "sm",
    "m",
    "ml",
    "l",
    "xl",
    "xxl",
    "xl3",
    "xl4",
    "xl5",
    "xl6",
    "xl7",
  ];

  const user = useSelector(getUser);
  const clothBasket = useSelector(getBasket);
  const cloth = useSelector(getClothesId);
  const dispatch = useDispatch();
  const { _id, name, code, allprice = {}, active, model, image } = cloth;
  const { xs, s, sm, m, ml, l, xl, xxl, xl3, xl4, xl5, xl6, xl7 } = allprice;

  const [currentBtn, setCurrentBtn] = useState({});
  useEffect(() => {
    setCurrentBtn(
      user?.user === "wholesaler"
        ? {
            ...cloth,
            amount: 1,
            _id: `${cloth._id}-xs`,
            allprice: { price: xs?.opt, size: "xs" },
          }
        : {
            ...cloth,
            amount: 1,
            _id: `${cloth._id}-xs`,
            allprice: { price: xs?.price, size: "xs" },
          }
    );
  }, [cloth, user?.user, xs?.opt, xs?.price]);
  // const [currentBtn, setCurrentBtn] = useState({
  //   size: "",
  //   price: 0,
  // });
  // console.log(currentBtn);
  // console.log(cloth);
  // console.log(image);

  const changeBtn = (size = cloth.allprice.xs, key) => {
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    // {
    //   size: e.currentTarget.name,
    //   price: e.currentTarget.value,
    // }

    setCurrentBtn(
      user?.user === "wholesaler"
        ? {
            ...cloth,
            amount: 1,
            _id: `${cloth._id}-${key}`,
            allprice: { price: size?.opt, size: key },
          }
        : {
            ...cloth,
            amount: 1,
            _id: `${cloth._id}-${key}`,
            allprice: { price: size?.price, size: key },
          }
    );

    // setCurrentBtn(e.currentTarget.name);
  };

  const saveShoppingCart = (clothes) => {
    const reapet = clothBasket.find((item) => currentBtn._id === item._id);
    if (reapet) {
      return;
    }
    return dispatch(changeShoppingCard(currentBtn));
  };

  const changePrice = (e) => {
    switch (e.currentTarget.name) {
      case "xs":
        return changeBtn(xs, "xs");
      case "s":
        return changeBtn(s, "s");
      case "sm":
        return changeBtn(sm, "sm");
      case "m":
        return changeBtn(m, "m");
      case "ml":
        return changeBtn(ml, "ml");
      case "l":
        return changeBtn(l, "l");
      case "xl":
        return changeBtn(xl, "xl");
      case "xxl":
        return changeBtn(xxl, "xxl");
      case "xl3":
        return changeBtn(xl3, "xl3");
      case "xl4":
        return changeBtn(xl4, "xl4");
      case "xl5":
        return changeBtn(xl5, "xl5");
      case "xl6":
        return changeBtn(xl6, "xl6");
      case "xl7":
        return changeBtn(xl7, "xl7");
    }
  };

  return (
    <>
      {cloth && cloth.name ? (
        <DivMain>
          <Div>
            <DivImage>
              <Image
                src={image?.url}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "contain" }}
              />
            </DivImage>
            <div>
              <h2>{name}</h2>
              <p>{code}</p>
              <p>{model}</p>
              <Ul>
                {size.map((item, index) => (
                  <li key={index}>
                    <button name={item} onClick={changePrice}>
                      {item}
                    </button>
                  </li>
                ))}
              </Ul>
              {/* <p>
                {currentBtn.allprice.size} :{currentBtn.allprice.price} грн
              </p> */}
              <p>
                {currentBtn?.allprice?.size} :{currentBtn?.allprice?.price} грн
              </p>

              {/* {currentBtn?.allprice?.price ? (

              ) : (
                <p>
                  xs :
                  {user?.user === "wholesaler"
                    ? cloth.allprice.xs.opt
                    : cloth.allprice.xs.price}
                  грн
                </p>
              )} */}

              <button onClick={() => saveShoppingCart()}>
                <HiOutlineShoppingCart size="20px" />
              </button>
            </div>
          </Div>
          <p>{cloth.description}</p>
        </DivMain>
      ) : (
        ""
      )}
    </>
  );
};

export default ClothesInfo;
