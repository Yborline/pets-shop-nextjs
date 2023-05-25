import Heading from "../Heading/Heading";
import {
  DivContact,
  FooterDiv,
  UlIcons,
  Li,
  Alink,
  AIcons,
  LiIcons,
  UlInfo,
} from "./Footer.styled";
import { RiInstagramFill } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import SocialIcons from "./SocialIcons/SocialIcons";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterDiv>
      <DivContact>
        <Heading tag="h4" text={t("Contact Information")} />
        <UlInfo>
          <Li>
            <FiPhoneCall size="20px" />
            <Alink href="tel: +380995097424">+38 (099) 509 74 24</Alink>
          </Li>
          <Li>
            <GoMail size="20px" />
            <Alink href="mailto:petshopua123@gmail.com">
              petshopua123@gmail.com
            </Alink>
          </Li>
          <li>
            <SocialIcons />
          </li>
        </UlInfo>
      </DivContact>
    </FooterDiv>
  );
};

export default Footer;
