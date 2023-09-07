import { UlIcons, LiIcons, AIcons } from "./SocialIcons.styled";
import { RiInstagramFill } from "react-icons/ri";
import { FaViber } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <UlIcons>
      <LiIcons>
        <AIcons href="https://www.instagram.com/ua.petshop/?igshid=MzRlODBiNWFlZA%3D%3D">
          <RiInstagramFill size="23px" />
        </AIcons>
      </LiIcons>
      <LiIcons>
        <AIcons href="https://invite.viber.com/?g2=AQAjHgNFMHIn9U%2BXhHhoj1CyUKlZnfC8aniE6JqzoKJifNcJWazgN00YjIw0FJzl&lang=en">
          <FaViber size="23px" />
        </AIcons>
      </LiIcons>
      <LiIcons>
        <AIcons href="https://t.me/uapetshop">
          <BsTelegram size="22px" />
        </AIcons>
      </LiIcons>
    </UlIcons>
  );
};

export default SocialIcons;
