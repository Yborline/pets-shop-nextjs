import Heading from "../Heading/Heading";
import { DivContact, FooterDiv } from "./Footer.styled";

import { useTranslation } from "react-i18next";
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
