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
} from "./Navbar.styled";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import useLocalStorage from "../../hooks/useLocalStorage";
import ctx from "../context/themeContext";
import i18n from "../../i18n/i18n";
import Button from "../Button/Button";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Сlothes", path: "/clothes" },
  { id: 3, title: "Cat", path: "/cat" },
  { id: 4, title: "Dog", path: "/dog" },
  { id: 5, title: <HiOutlineShoppingCart size="20px" />, path: "/basket" },
];

const Navbar = () => {
  const { themes, toggleTheme } = useContext(ctx);
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const [language, setLanguage] = useLocalStorage("language", "ua");

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
          <Button
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
          <Button
            text={language === "ua" ? t("EN") : t("UA")}
            handleClick={handleLenguageChange}
          />
        </DivOther>
        {navigation.map(({ id, title, path }) => (
          <NavLi key={id}>
            <Link href={path}>
              {pathname === path ? (
                <LinkActive>{title}</LinkActive>
              ) : (
                <LinkNormal>{title}</LinkNormal>
              )}
              {/* <p className={pathname === path ? s.active : null}>{title}</p> */}
            </Link>
          </NavLi>
        ))}

        {/* <Link href="/purchases">Purchases</Link>
        <Link href="/basket">Basket</Link> */}
      </UlNavigation>
    </Nav>
  );
};

export default Navbar;
