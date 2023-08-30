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
import ListInfo from "./ListInfo/ListInfo";
import { useWindowWidth } from "@react-hook/window-size";
import FooterDesktop from "./FooterDesktop/FooterDesktop";
import useToggleModal from "../../hooks/useToggleModal";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import { useRouter } from "next/router";
const Footer = () => {
  const width = useWindowWidth();
  const { t } = useTranslation();
  const [showModal, toggleModal] = useToggleModal();
  const { pathname } = useRouter();
  return (
    <FooterDiv>
      <DivContact>
        <Heading tag="h4" text={t("Contact Information")} />
        {width > 769 ? (
          <FooterDesktop toggleModal={() => toggleModal()} />
        ) : (
          <ListInfo />
        )}
      </DivContact>
      {showModal && (
        <Modal path={pathname} close={toggleModal}>
          <LoginForm toggleModal={toggleModal} />
        </Modal>
      )}
    </FooterDiv>
  );
};

export default Footer;
