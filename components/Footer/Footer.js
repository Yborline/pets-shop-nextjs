import Heading from "../Heading/Heading";
import {
  DivContact,
  FooterDiv,
  UlIcons,
  Div,
  Alink,
  AIcons,
  LiIcons,
  DivInfo,
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
        <DivInfo>
          <Div>
            <FiPhoneCall size="20px" />
            <Alink href="tel: +380995097424">+38 (099) 509 74 24</Alink>
          </Div>
          <Div>
            <GoMail size="20px" />

            <Alink href="mailto: borrline@gmail.com">borrline@gmail.com</Alink>
          </Div>
          <SocialIcons />
        </DivInfo>
      </DivContact>
    </FooterDiv>
  );
};

export default Footer;
