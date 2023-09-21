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
  DivOther,
  LiMobile,
} from "./NavbarMobile.styled";
import AboutUs from "../AboutUs.js/AboutUs";
import ButtonUser from "../../ButtonUser/ButtonUser";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Link from "next/link";
import FilterName from "../../Filter/FilterName/FilterName";
import ButtonSmall from "../../ButtonSmall/ButtonSmall";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import ctx from "../../../context/themeContext";
import { useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedIn } from "../../../redux/auth/auth-selectors";
import authOperations from "../../../redux/auth/auth-operatins";
import Button from "../../Button/Button";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";

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
  const [state, setState] = useState(false);
  const { themes, toggleTheme } = useContext(ctx);
  const [showModal, setShowModal] = useState(false);
  const pathNavbar = [
    // { id: 1, title: <AiOutlineHome size="25px" />, path: "/" },
    { id: 2, title: t(`Clothes`), path: "/clothes", page: "1" },
    { id: 3, title: t(`Cat`), path: "/cat" },
    { id: 4, title: t(`Dog`), path: "/dog" },
    // { id: 5, title: <HiOutlineShoppingCart size="20px" />, path: "/basket" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: "auto" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <DivOther style={{ marginRight: "10px", display: "flex" }}>
        <div style={{ display: "flex" }}>
          <ButtonSmall
            marginright="5px"
            handleClick={
              themes === "light"
                ? () => toggleTheme("dark")
                : () => toggleTheme("light")
            }
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

        {logged ? (
          <Button
            height="30px"
            marginB="15px"
            width="50px"
            handleClick={() => dispatch(authOperations.logout())}
          >
            {t("Exit")}
          </Button>
        ) : (
          <ButtonUser toggleModal={toggleModal} />
        )}
      </DivOther>
      <Ul>
        {pathNavbar.map(({ path, title, id }) => (
          <LiMobile key={id}>
            <Link href={{ pathname: path }}>
              {pathname === path ? (
                <LinkActive>{title}</LinkActive>
              ) : (
                <LinkNormal>{title}</LinkNormal>
              )}
              {/* <p className={pathname === path ? s.active : null}>{title}</p> */}
            </Link>
          </LiMobile>
        ))}
      </Ul>

      <Divider />
      <div style={{ marginTop: "20px" }}>
        <AboutUs />
        {/* {!logged && <ButtonUser toggleModal={toggleModal} />} */}

        {/* {logged ? (
          <Button
            height="30px"
            marginB="15px"
            width="100%"
            handleClick={() => dispatch(authOperations.logout())}
          >
            {t("Exit")}
          </Button>
        ) : (
          <ButtonUser toggleModal={toggleModal} />
        )} */}
      </div>
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div style={{ position: "relative" }}>
      <DivMobileSvg>
        <Link style={{ display: "flex", zIndex: "100" }} href={`/`}>
          <Svg />
          <H1>Ua.PetShop</H1>
        </Link>
      </DivMobileSvg>
      <DivTwo>
        <ButtonList style={{ zIndex: 1 }} onClick={toggleDrawer(true)}>
          <AiOutlineUnorderedList size="30px" />
        </ButtonList>
        <></>
        <Link style={{ zIndex: 1 }} href="/basket">
          {pathname === "/basket" ? (
            <LinkActive>
              <div style={{ position: "relative" }}>
                <HiOutlineShoppingCart
                  style={{ position: "absolute", top: "-7px" }}
                  size="25px"
                />
                <DivNumber>
                  <SpanBasketNumber
                    style={{ position: "absolute", top: "-14px" }}
                  >
                    {clotheActual.length}
                  </SpanBasketNumber>
                </DivNumber>
              </div>
            </LinkActive>
          ) : (
            <LinkNormal>
              <div style={{ position: "relative" }}>
                <HiOutlineShoppingCart
                  size="25px"
                  style={{ position: "absolute", top: "-7px" }}
                />
                <DivNumber>
                  <SpanBasketNumber
                    style={{ position: "absolute", top: "-14px" }}
                  >
                    {clotheActual.length}
                  </SpanBasketNumber>
                </DivNumber>
              </div>
            </LinkNormal>
          )}
        </Link>
      </DivTwo>
      <SwipeableDrawer
        anchor={"right"}
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        PaperProps={{
          sx: {
            backgroundColor: themes === "light" ? "#FFDDE1" : "#2F4F4F",
          },
        }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};

export default NavbarMobile;
