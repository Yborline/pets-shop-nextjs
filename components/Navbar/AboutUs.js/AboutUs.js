import Link from "next/link";
import { useTranslation } from "react-i18next";
import { NavLink } from "./AboutUs.styled";
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavLink href="/aboutUs/partners">{t(`Partners`)}</NavLink>
      <NavLink href="/aboutUs/aboutUs">{t(`About us`)}</NavLink>
      <NavLink href="/aboutUs/delivery">{t(`Delivery and payment`)}</NavLink>
    </>
  );
};

export default AboutUs;
