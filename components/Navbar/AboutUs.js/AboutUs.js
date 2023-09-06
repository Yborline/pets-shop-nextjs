import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NavLink, LinkActive, LinkNormal } from "./AboutUs.styled";
import { useRouter } from "next/router";

const AboutUs = () => {
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const navigation = [
    { id: 1, title: t(`Partners`), path: "/aboutUs/partners" },
    { id: 2, title: t(`About us`), path: "/aboutUs/aboutUs" },
    { id: 3, title: t(`Delivery and payment`), path: "/aboutUs/delivery" },
  ];
  return (
    <>
      {navigation.map(({ id, title, path, page }) => (
        <NavLink href={path} key={id}>
          {pathname === path ? (
            <LinkActive>{title}</LinkActive>
          ) : (
            <LinkNormal>{title}</LinkNormal>
          )}
          {/* <p className={pathname === path ? s.active : null}>{title}</p> */}
        </NavLink>
      ))}
    </>
  );
};

export default AboutUs;
