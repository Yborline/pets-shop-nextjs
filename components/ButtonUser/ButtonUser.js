import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Div, DivNoUser, P, Button } from "./ButtonUser.styled";
import { getLoggedIn, getUserName } from "../../redux/auth/auth-selectors";
import { useWindowWidth } from "@react-hook/window-size";
import { useTranslation } from "react-i18next";

const ButtonUser = ({ toggleModal }) => {
  const width = useWindowWidth();
  const logged = useSelector(getLoggedIn);
  const user = useSelector(getUserName);
  const { t } = useTranslation();

  return (
    <Div>
      {logged && user?.name ? (
        <div>
          <Button onClick={toggleModal}>
            {user.name[0].toUpperCase()}
            {user.lastName[0].toUpperCase()}
          </Button>
        </div>
      ) : (
        <>
          {width > 768 ? (
            <DivNoUser>
              <FaUserCircle
                onClick={toggleModal}
                style={{ cursor: "pointer" }}
                size="20px"
              />
              <P onClick={toggleModal}>{t(`Registration/Login`)}</P>
            </DivNoUser>
          ) : (
            <DivNoUser>
              <FaUserCircle
                onClick={toggleModal}
                style={{ cursor: "pointer" }}
                size="30px"
              />
            </DivNoUser>
          )}
        </>
      )}
    </Div>
  );
};

export default ButtonUser;
