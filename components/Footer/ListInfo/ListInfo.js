import {
  Li,
  Alink,
  UlInfo,
} from "../Footer.styled";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import SocialIcons from "../SocialIcons/SocialIcons";

const ListInfo = () => {
  return (
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
  );
};

export default ListInfo;
