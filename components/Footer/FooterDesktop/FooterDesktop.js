import { useSelector } from "react-redux";
import ListInfo from "../ListInfo/ListInfo";

import {
  H3,
  Div,
  DivNavigation,
  HoverLink,
  Button,
  Hart,
} from "./FooterDesktop.styled";
import { getLoggedIn } from "../../../redux/auth/auth-selectors";
const FooterDesktop = ({ toggleModal }) => {
  const logged = useSelector(getLoggedIn);

  return (
    <Div>
      <H3>
        UA.Petshop <br />3 любов&#39;ю до кожної ниточки{` `} <Hart />
      </H3>

      <DivNavigation>
        <HoverLink href="/">Головна сторінка</HoverLink>
        <HoverLink href="/aboutUs/measurements">Як зробити заміри </HoverLink>
        <HoverLink href="/aboutUs/aboutUs">Про нас</HoverLink>
        <HoverLink href="/aboutUs/partners">Партнери</HoverLink>
        {!logged && <Button onClick={toggleModal}>Вхід/Реєстрація</Button>}
      </DivNavigation>

      <ListInfo />
    </Div>
  );
};

export default FooterDesktop;
