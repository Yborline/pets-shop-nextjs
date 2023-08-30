import Link from "next/link";
import { useRouter } from "next/router";
import {
  LinkActive,
  LinkNormal,
  Nav,
  UlNavigation,
  NavLi,
  Logo,
  DivLogo,
  DivOther,
  Ul,
  DivMenu,
  ButtonList,
  SpanBasketNumber,
  DivSpan,
  DivBasket,
  DivNumber,
  DivAbout,
  DivPhone,
  LiIcons,
  AIcons,
  UlIcons,
  DivInfo,
  DivUser,
  UlNavigate,
  DivSvg,
  H1,
  DivMobile,
  Divfirst,
  DivTwo,
  DivFilterMobile,
  Phone,
  DivAboutUs,
  DivMobileSvg,
  DivLogoInfo,
} from "./Navbar.styled";
import { useTranslation } from "react-i18next";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
// import { MdPets } from "react-icons/md";
import useLocalStorage from "../../hooks/useLocalStorage";
import ctx from "../../context/themeContext";
import i18n from "../../i18n/i18n";
import ButtonSmall from "../ButtonSmall/ButtonSmall";
import { useState, useContext } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import ButtonUser from "../ButtonUser/ButtonUser";
import Modal from "../Modal";
import LoginForm from "../LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { getActualCard, getBasket } from "../../redux/clothes/clothes-selector";
import Image from "next/image";
import sprite from "../../public/sprite/image.svg";
import s from "./Navbar.module.css";
import FilterName from "../Filter/FilterName/FilterName";
import ctxInput from "../../context/filterContext";
import SocialIcons from "../Footer/SocialIcons/SocialIcons";
import ToastifyContainer from "../ToastifyContainer/ToastifyContainer";
import ButtonUp from "../ButtonUp/ButtonUp";
import AboutUs from "./AboutUs.js/AboutUs";
import SetScroll from "../../hooks/setScroll";
import useToggleModal from "../../hooks/useToggleModal";
import { getLoggedIn } from "../../redux/auth/auth-selectors";
import authOperations from "../../redux/auth/auth-operatins";
import NavbarMobile from "./NavbarMobile.js/NavbarMobile";

const Navbar = () => {
  const { input, inputIn } = useContext(ctxInput);
  const [showModal, toggleModal] = useToggleModal();

  const { themes, toggleTheme } = useContext(ctx);
  const clotheActual = useSelector(getActualCard);
  const logged = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  const { pathname } = useRouter();
  const { t } = useTranslation();
  const [language, setValue] = useLocalStorage("language", "ua");
  const width = useWindowWidth();
  const [scroll, setScroll] = SetScroll();

  const navigation = [
    // { id: 1, title: <AiOutlineHome size="25px" />, path: "/" },
    { id: 2, title: t(`Clothes`), path: "/clothes", page: "1" },
    { id: 3, title: t(`Cat`), path: "/cat" },
    { id: 4, title: t(`Dog`), path: "/dog" },
    // { id: 5, title: <HiOutlineShoppingCart size="20px" />, path: "/basket" },
  ];

  const handleLenguageChange = () => {
    if (language === "en") {
      i18n.changeLanguage("ua");
      setValue("ua");
    } else if (language === "ua") {
      i18n.changeLanguage("en");
      setValue("en");
    }
  };

  return (
    <Nav>
      {width > 767 && (
        <>
          <DivAbout>
            <AboutUs />

            <DivUser>
              <DivOther>
                <ButtonSmall
                  marginR="5px"
                  handleClick={toggleTheme}
                  text={
                    themes === "light" ? (
                      <BsMoonFill size="14px" />
                    ) : (
                      <BsFillSunFill size="14px" />
                    )
                  }
                />
                <ButtonSmall
                  text={language === "ua" ? t("EN") : t("UA")}
                  handleClick={handleLenguageChange}
                />
              </DivOther>
              {logged ? (
                <button
                  height="30px"
                  marginB="15px"
                  text="Exit"
                  width="100%"
                  type="submit"
                  onClick={() => dispatch(authOperations.logout())}
                >
                  {t("Exit")}
                </button>
              ) : (
                <ButtonUser toggleModal={toggleModal} />
              )}
            </DivUser>
          </DivAbout>
          <DivLogoInfo>
            <DivPhone>
              <Phone href="tel: +380995097424">+38 (099) 509 74 24</Phone>
              <Link href="/basket">
                {pathname === "/basket" ? (
                  <LinkActive>
                    <HiOutlineShoppingCart
                      style={{ zIndex: 3, position: "relative", top: "2px" }}
                      size="20px"
                    />
                    {t(`Cart`)} ({clotheActual.length})
                  </LinkActive>
                ) : (
                  <LinkNormal>
                    <HiOutlineShoppingCart
                      size="20px"
                      style={{ zIndex: 3, position: "relative", top: "2px" }}
                    />
                    {t(`Cart`)} ({clotheActual.length})
                  </LinkNormal>
                )}
              </Link>
            </DivPhone>
            <DivSvg>
              <Link style={{ zIndex: 5 }} className={s.sprite} href={`/`}>
                {/* <Sprite fill={"black"} stroke={"black"} /> */}
                <Image priority src={sprite} alt="Follow us on Twitter"></Image>
                <H1 className={s.sprite}>Ua.PetShop</H1>
              </Link>
            </DivSvg>
            <DivInfo>
              <SocialIcons />
            </DivInfo>
          </DivLogoInfo>
          {pathname === "/" && (
            <DivInfo>
              {" "}
              <FilterName heightInput="30px" saveInput={inputIn}></FilterName>
            </DivInfo>
          )}
        </>
      )}

      {showModal && (
        <Modal path={pathname} close={toggleModal}>
          <LoginForm toggleModal={toggleModal} />
          {/* <CLothesForm onSave={toggleModal} toggleModal={toggleModal} /> */}
        </Modal>
      )}
      {width > 767 ? (
        <UlNavigation>
          {navigation.map(({ id, title, path, page }) => (
            <NavLi key={id}>
              <Link href={{ pathname: path }}>
                {pathname === path ? (
                  <LinkActive>{title}</LinkActive>
                ) : (
                  <LinkNormal>{title}</LinkNormal>
                )}
                {/* <p className={pathname === path ? s.active : null}>{title}</p> */}
              </Link>
            </NavLi>
          ))}
          {/* <ButtonUser toggleModal={toggleModal} /> */}
        </UlNavigation>
      ) : (
        <NavbarMobile
          scroll={scroll}
          clotheActual={clotheActual}
          inputIn={inputIn}
          toggleTheme={toggleTheme}
          themes={themes}
          language={language}
          handleLenguageChange={handleLenguageChange}
          navigation={navigation}
          toggleModal={toggleModal}
        />
      )}
      <ToastifyContainer />
      <ButtonUp />
    </Nav>
  );
};

export default Navbar;
