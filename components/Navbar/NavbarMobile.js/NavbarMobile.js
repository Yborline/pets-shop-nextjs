import {
  LinkActive,
  LinkNormal,
  UlNavigation,
  NavLi,
  Ul,
  DivMenu,
  ButtonList,
  SpanBasketNumber,
  DivNumber,
  H1,
  DivTwo,
  DivFilterMobile,
  DivAboutUs,
  DivMobileSvg,
  Svg,
} from "../Navbar.styled";
import AboutUs from "../AboutUs.js/AboutUs";
import ButtonUser from "../../ButtonUser/ButtonUser";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import FilterName from "../../Filter/FilterName/FilterName";
import ButtonSmall from "../../ButtonSmall/ButtonSmall";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import sprite from "../../../public/sprite/image.svg";
import ctx from "../../../context/themeContext";

import { useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedIn } from "../../../redux/auth/auth-selectors";
import authOperations from "../../../redux/auth/auth-operatins";

const NavbarMobile = ({
  handleLenguageChange,
  language,
  scroll,
  clotheActual,
  inputIn,
  navigation,
  toggleModal,
}) => {
  const logged = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { pathname } = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const { themes, toggleTheme } = useContext(ctx);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <DivAboutUs>{scroll < 200 && <AboutUs />}</DivAboutUs>
      <UlNavigation
        style={pathname === "/" ? { height: "80px" } : { height: "50px" }}
      >
        {/* <Divfirst> */}
        <DivTwo>
          <ButtonList style={{ zIndex: 1 }} onClick={toggleMenu}>
            <AiOutlineUnorderedList size="30px" />
          </ButtonList>
          <>
            <DivMobileSvg>
              <Link style={{ display: "flex" }} href={`/`}>
                {/* <Sprite fill={"black"} stroke={"black"} /> */}
                <Svg />
                <H1>Ua.PetShop</H1>
              </Link>
            </DivMobileSvg>
          </>
          <Link style={{ zIndex: 1 }} href="/basket">
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
        </DivTwo>
        {/* <DivInfo>
              {" "} */}
        {pathname === "/" ? (
          <DivFilterMobile>
            <FilterName
              heightInput="25px;"
              position="flex-end"
              height="50px"
              saveInput={inputIn}
            ></FilterName>
          </DivFilterMobile>
        ) : (
          <></>
        )}

        {/* </DivInfo> */}
        {/* </Divfirst> */}
        {showMenu && (
          <Ul>
            {" "}
            <ButtonList onClick={toggleMenu}>
              <AiOutlineUnorderedList size="30px" />
            </ButtonList>
            <></>
            <DivMenu>
              <div style={{ marginRight: "10px", display: "flex" }}>
                {" "}
                <ButtonSmall
                  marginR="5px"
                  handleClick={toggleTheme}
                  text={
                    themes === "light" ? (
                      <BsMoonFill size="18px" />
                    ) : (
                      <BsFillSunFill size="18px" />
                    )
                  }
                />
                <ButtonSmall
                  text={language === "ua" ? t("EN") : t("UA")}
                  handleClick={handleLenguageChange}
                />
              </div>

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
            </DivMenu>
          </Ul>
        )}
      </UlNavigation>
    </>
  );
};

export default NavbarMobile;
