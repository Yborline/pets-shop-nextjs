import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  Div,
  DivMain,
  DivImage,
  Ul,
  Span,
  Description,
  Li,
  P,
  DivCorrection,
  DivSizes,
} from "./ClothesInfo.styled";
import { getUser } from "../../redux/auth/auth-selectors";
import { useEffect, useState } from "react";
import authOperations from "../../redux/auth/auth-operatins";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { changeShoppingCard } from "../../redux/clothes/clothes-actions";
import { getClothesId, getBasket } from "../../redux/clothes/clothes-selector";
import Link from "next/link";
import DiscountForm from "../discountForm/discountForm";
import onSale from "../../calculation/makeDiscount";
import Button from "../Button/Button";
import { Suspense } from "react";
import { ColorRing } from "react-loader-spinner";
import { useTranslation } from "react-i18next";
import GallaryComponent from "../GallaryComponent/GallaryComponent";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useRef } from "react";

const ClothesInfo = ({ id, cloth, notifyError, notifySuccess }) => {
  const windowWidth = useRef(window.innerWidth);
  const { t } = useTranslation();
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

  const [openMenu, setOpenMenu] = useState(false);
  const { user } = useSelector(getUser);
  const clothBasket = useSelector(getBasket);
  // const cloth = useSelector(getClothesId);
  const dispatch = useDispatch();
  const {
    _id,
    name,
    code,
    allprice = {},
    active,
    model,
    image,
    discount,
  } = cloth;
  const { xs, s, sm, m, ml, l, xl, xxl, xl3, xl4, xl5, xl6, xl7 } = allprice;

  const [currentBtn, setCurrentBtn] = useState({});
  useEffect(() => {
    setCurrentBtn(
      // user?.user === "wholesaler"
      user === "wholesaler"
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
  }, [cloth, user, xs?.opt, xs?.price]);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  // }, [cloth, user?.user, xs?.opt, xs?.price]);

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
      user === "wholesaler"
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

  const saveShoppingCart = () => {
    const reapet = clothBasket.find((item) => currentBtn._id === item._id);
    if (reapet) {
      console.log(currentBtn);
      return notifyError(currentBtn.name, "корзині");
    }
    dispatch(changeShoppingCard(currentBtn));
    notifySuccess(currentBtn.name, "корзину");
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
  console.log(currentBtn);
  return (
    <>
      <>
        {cloth && cloth.name ? (
          <DivMain>
            <Div>
              <GallaryComponent image={image} name={name} />
              <DivSizes>
                <h2>{name}</h2>
                <P>
                  {t(`Code`)} : {code}
                </P>
                <P>
                  {t(`Model`)} : {t(`${model}`)}
                </P>
                <Ul>
                  {size.map((item, index) => (
                    <Li key={index}>
                      <Button
                        active={
                          currentBtn?.allprice?.size === item ? true : false
                        }
                        height="25px"
                        text={item.toLocaleUpperCase()}
                        name={item}
                        handleClick={changePrice}
                      />
                    </Li>
                  ))}
                </Ul>
                {/* <p>
                {currentBtn.allprice.size} :{currentBtn.allprice.price} грн
              </p> */}
                <P>
                  {currentBtn?.allprice?.size} :
                  {currentBtn.discount > 0 ? (
                    <Span>{currentBtn?.allprice?.price} грн </Span>
                  ) : (
                    <></>
                  )}
                  {onSale(currentBtn?.allprice?.price, currentBtn.discount)} грн
                </P>

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
                <Button
                  handleClick={saveShoppingCart}
                  text={<HiOutlineShoppingCart size="20px" />}
                ></Button>

                {/* <button onClick={saveShoppingCart}>
                  <HiOutlineShoppingCart size="20px" />
                </button> */}
              </DivSizes>
            </Div>
            <h4>{t("Description")}</h4>
            <Description>{cloth.description}</Description>
            {user === "admin" ? (
              <>
                <button onClick={toggleMenu}>
                  {openMenu ? t("Closed") : t("Amend")}
                </button>
                {openMenu ? (
                  <>
                    <DivCorrection>
                      <Link
                        href={{
                          pathname: `/create/update`,
                          query: { id: _id },
                        }}
                      >
                        {t("Edit")}
                      </Link>
                    </DivCorrection>
                    <div>
                      <p>
                        {t("Discount")} {discount} грн
                      </p>
                      <DiscountForm id={_id} />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <></>
            )}
          </DivMain>
        ) : (
          ""
        )}
      </>
    </>
  );
};

export default ClothesInfo;
