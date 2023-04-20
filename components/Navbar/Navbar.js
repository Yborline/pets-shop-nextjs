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
} from "./Navbar.styled";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import useLocalStorage from "../../hooks/useLocalStorage";
import ctx from "../context/themeContext";
import i18n from "../../i18n/i18n";
import ButtonSmall from "../ButtonSmall/ButtonSmall";
import { useState, useEffect } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import ButtonUser from "../ButtonUser/ButtonUser";
import Modal from "../Modal";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { getActualCard, getBasket } from "../../redux/clothes/clothes-selector";
import { AiOutlineHome } from "react-icons/ai";

const Navbar = () => {
  // const [screenWidth, setScreenWidth] = useState(320);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { themes, toggleTheme } = useContext(ctx);
  const clotheActual = useSelector(getActualCard);
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");
  const width = useWindowWidth();

  const navigation = [
    { id: 1, title: <AiOutlineHome size="25px" />, path: "/" },
    { id: 2, title: t(`Clothes`), path: "/clothes", page: "1" },
    { id: 3, title: t(`Cat`), path: "/cat" },
    { id: 4, title: t(`Dog`), path: "/dog" },
    // { id: 5, title: <HiOutlineShoppingCart size="20px" />, path: "/basket" },
  ];

  // const changeScreen = () => {
  //   setScreenWidth(window.screen.width);
  // };

  // useEffect(() => {
  //   changeScreen();
  // }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLenguageChange = () => {
    if (language === "en") {
      i18n.changeLanguage("ua");
      setLanguage("ua");
    } else if (language === "ua") {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  };

  return (
    <Nav>
      <DivLogo>
        <Link href="/">
          <Logo>
            <MdPets />
            PetShop
          </Logo>
        </Link>
      </DivLogo>

      <UlNavigation>
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
        {showModal && (
          <Modal path={pathname} close={toggleModal}>
            <LoginForm toggleModal={toggleModal} />
            {/* <CLothesForm onSave={toggleModal} toggleModal={toggleModal} /> */}
          </Modal>
        )}

        <Link href="/basket">
          {pathname === "/basket" ? (
            <LinkActive>
              <HiOutlineShoppingCart
                style={{ position: "relative", top: "8px" }}
                size="20px"
              />
              <DivNumber>
                <SpanBasketNumber>{clotheActual.length}</SpanBasketNumber>
              </DivNumber>
            </LinkActive>
          ) : (
            <LinkNormal>
              <HiOutlineShoppingCart
                size="20px"
                style={{ position: "relative", top: "10px" }}
              />
              <DivNumber>
                <SpanBasketNumber>{clotheActual.length}</SpanBasketNumber>
              </DivNumber>
            </LinkNormal>
          )}
        </Link>

        {width > 767 ? (
          <>
            {navigation.map(({ id, title, path, page }) => (
              <NavLi key={id}>
                <Link onClick={toggleMenu} href={{ pathname: path }}>
                  {pathname === path ? (
                    <LinkActive>{title}</LinkActive>
                  ) : (
                    <LinkNormal>{title}</LinkNormal>
                  )}
                  {/* <p className={pathname === path ? s.active : null}>{title}</p> */}
                </Link>
              </NavLi>
            ))}
            <ButtonUser toggleModal={toggleModal} />
          </>
        ) : (
          <>
            <ButtonList onClick={toggleMenu}>
              <AiOutlineUnorderedList size="20px" />
            </ButtonList>
            {showMenu && (
              <Ul>
                <DivMenu>
                  {navigation.map(({ id, title, path }) => (
                    <NavLi key={id}>
                      <Link onClick={toggleMenu} href={path}>
                        {pathname === path ? (
                          //   <LinkActive>{t(`${title}`)}</LinkActive>
                          // ) : (
                          //   <LinkNormal>{t(`${title}`)}</LinkNormal>
                          <LinkActive>{title}</LinkActive>
                        ) : (
                          <LinkNormal>{title}</LinkNormal>
                        )}
                        {/* <p className={pathname === path ? s.active : null}>{title}</p> */}
                      </Link>
                    </NavLi>
                  ))}
                  <ButtonUser toggleModal={toggleModal} />
                </DivMenu>
                <ButtonList onClick={toggleMenu}>
                  <AiOutlineUnorderedList size="20px" />
                </ButtonList>
              </Ul>
            )}
          </>
        )}
      </UlNavigation>
    </Nav>
  );
};

export default Navbar;
