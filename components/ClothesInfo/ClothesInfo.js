import { useDispatch, useSelector } from "react-redux";
import {
  Div,
  DivMain,
  Ul,
  Span,
  Description,
  Li,
  P,
  DivCorrection,
  DivSizes,
} from "./ClothesInfo.styled.jsx";
import { getUser } from "../../redux/auth/auth-selectors";
import { useEffect, useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { changeShoppingCard } from "../../redux/clothes/clothes-actions";
import { getBasket } from "../../redux/clothes/clothes-selector";
import Link from "next/link";
import DiscountForm from "../DiscountForm/DiscountForm.js";
import onSale from "../../calculation/makeDiscount";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import GallaryComponent from "../GallaryComponent/GallaryComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ClothesInfo = ({ id, cloth = {}, notifyError, notifySuccess }) => {
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
  } = cloth || {};
  const { xs, s, sm, m, ml, l, xl, xxl, xl3, xl4, xl5, xl6, xl7 } =
    allprice || {};

  const [currentBtn, setCurrentBtn] = useState({});
  useEffect(() => {
    cloth &&
      setCurrentBtn(
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

  const changeBtn = (size = cloth.allprice.xs, key) => {
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
  return (
    <>
      {!cloth ? (
        <h2>Такого елементу не знайдено</h2>
      ) : (
        <>
          {cloth && cloth.name && (
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
                  <P>
                    {currentBtn?.allprice?.size} :
                    {currentBtn.discount > 0 && (
                      <Span>{currentBtn?.allprice?.price} грн </Span>
                    )}
                    {onSale(currentBtn?.allprice?.price, currentBtn.discount)}{" "}
                    грн
                  </P>

                  <Button
                    handleClick={saveShoppingCart}
                    text={
                      <HiOutlineShoppingCart
                        style={{ marginRight: "15px" }}
                        size="20px"
                      />
                    }
                  >
                    + В кошик
                  </Button>
                </DivSizes>
              </Div>
              <Link href="/aboutUs/measurements">
                <Button
                  width={"200px"}
                  height={"30px"}
                  text="зробити заміри"
                ></Button>
              </Link>
              <h4>{t("Description")}</h4>
              <Description>{cloth.description}</Description>
              {user === "admin" && (
                <>
                  <button onClick={toggleMenu}>
                    {openMenu ? t("Closed") : t("Amend")}
                  </button>
                  {openMenu && (
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
                  )}
                </>
              )}
            </DivMain>
          )}
        </>
      )}
    </>
  );
};

export default ClothesInfo;
