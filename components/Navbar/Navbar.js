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
} from "./Navbar.styled";
import { useTranslation } from "react-i18next";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
// import { MdPets } from "react-icons/md";
import useLocalStorage from "../../hooks/useLocalStorage";
import ctx from "../context/themeContext";
import i18n from "../../i18n/i18n";
import ButtonSmall from "../ButtonSmall/ButtonSmall";
import { useState, useContext } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import ButtonUser from "../ButtonUser/ButtonUser";
import Modal from "../Modal";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import { getActualCard, getBasket } from "../../redux/clothes/clothes-selector";
import Image from "next/image";
import sprite from "../../public/sprite/image.svg";
import s from "./Navbar.module.css";
import FilterName from "../Filter/FilterName/FilterName";
import ctxInput from "../../components/context/filterContext";
import SocialIcons from "../Footer/SocialIcons/SocialIcons";
import ToastifyContainer from "../ToastifyContainer/ToastifyContainer";

const Navbar = () => {
  const { input, inputIn } = useContext(ctxInput);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { themes, toggleTheme } = useContext(ctx);
  const clotheActual = useSelector(getActualCard);
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");
  const width = useWindowWidth();
  // const [input, setInput] = useState("");

  const navigation = [
    // { id: 1, title: <AiOutlineHome size="25px" />, path: "/" },
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

  // inputIn(value);

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
      {width > 767 ? (
        <>
          <DivAbout>
            <Link href="/aboutUs/partners">{t(`Partners`)}</Link>
            <Link href="/aboutUs/aboutUs">{t(`About us`)}</Link>
            <Link href="/aboutUs/delivery">{t(`Delivery and payment`)}</Link>

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
              <ButtonUser toggleModal={toggleModal} />
            </DivUser>
          </DivAbout>

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
                  {/* <DivNumber>
                    <SpanBasketNumber>{clotheActual.length}</SpanBasketNumber>
                  </DivNumber> */}
                </LinkActive>
              ) : (
                <LinkNormal>
                  <HiOutlineShoppingCart
                    size="20px"
                    style={{ zIndex: 3, position: "relative", top: "2px" }}
                    // style={{ position: "relative", top: "10px" }}
                  />
                  {/* <HiOutlineShoppingCart
                size="20px"
                style={{ position: "relative", top: "10px" }}
              />
              <DivNumber>
                <SpanBasketNumber>{clotheActual.length}</SpanBasketNumber>
              </DivNumber> */}
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
          {pathname === "/" ? (
            <DivInfo>
              {" "}
              <FilterName heightInput="25px" saveInput={inputIn}></FilterName>
            </DivInfo>
          ) : (
            <></>
          )}
        </>
      ) : (
        // <></>
        <>
          <DivSvg>
            <Link className={s.sprite} href={`/`}>
              {/* <Sprite fill={"black"} stroke={"black"} /> */}
              <Image
                priority
                width={50}
                height={50}
                src={sprite}
                alt="Follow us on Twitter"
              ></Image>
              <H1 className={s.sprite}>Ua.PetShop</H1>
            </Link>
          </DivSvg>
        </>
      )}
      {/* <DivLogo>
        <Link href="/">
          <Logo>
            <MdPets />
            PetShop
          </Logo>
        </Link>
      </DivLogo> */}

      {/* <DivOther>
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
        </DivOther> */}
      {showModal && (
        <Modal path={pathname} close={toggleModal}>
          <LoginForm toggleModal={toggleModal} />
          {/* <CLothesForm onSave={toggleModal} toggleModal={toggleModal} /> */}
        </Modal>
      )}

      {/* <Link href="/basket">
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
        </Link> */}

      {width > 767 ? (
        <UlNavigation>
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
          {/* <ButtonUser toggleModal={toggleModal} /> */}
        </UlNavigation>
      ) : (
        <UlNavigation
          style={pathname === "/" ? { height: "100px" } : { height: "50px" }}
        >
          {/* <Divfirst> */}
          <DivTwo>
            <ButtonList style={{ zIndex: 1 }} onClick={toggleMenu}>
              <AiOutlineUnorderedList size="30px" />
            </ButtonList>

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
            </Ul>
          )}
        </UlNavigation>
      )}
      <ToastifyContainer />
    </Nav>
  );
};

export default Navbar;
