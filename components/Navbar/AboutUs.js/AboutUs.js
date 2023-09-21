import { useTranslation } from "react-i18next";
import { NavLink, LinkActive, LinkNormal, Ul } from "./AboutUs.styled";
import { useRouter } from "next/router";

const AboutUs = ({ row }) => {
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const navigation = [
    { id: 1, title: t(`Partners`), path: "/aboutUs/partners" },
    { id: 2, title: t(`About us`), path: "/aboutUs/aboutUs" },
    { id: 3, title: t(`Delivery and payment`), path: "/aboutUs/delivery" },
  ];
  return (
    <Ul $row={row}>
      {navigation.map(({ id, title, path, page }) => (
        <li key={id}>
          <NavLink href={path}>
            {pathname === path ? (
              <LinkActive>{title}</LinkActive>
            ) : (
              <LinkNormal>{title}</LinkNormal>
            )}
          </NavLink>
        </li>
      ))}
    </Ul>
  );
};

export default AboutUs;
