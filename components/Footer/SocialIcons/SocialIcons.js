import { UlIcons, LiIcons, AIcons } from "./SocialIcons.styled";
import { RiInstagramFill } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <UlIcons>
      <LiIcons>
        <AIcons href="">
          <RiInstagramFill size="22px" />
        </AIcons>
      </LiIcons>
      <LiIcons>
        <AIcons href="">
          <FaViber size="20px" />
        </AIcons>
      </LiIcons>
      <LiIcons>
        <AIcons href="">
          <BsTelegram size="20px" />
        </AIcons>
      </LiIcons>
    </UlIcons>
  );
};

export default SocialIcons;
