import { FaUserCircle } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Button, Div } from "./ButtonUser.styled";
import { getLoggedIn } from "../../redux/auth/auth-selectors";

const ButtonUser = ({ toggleModal }) => {
  const logged = useSelector(getLoggedIn);

  return (
    <Div>
      {logged ? (
        <FiUserCheck
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
          size="20px"
        />
      ) : (
        <FaUserCircle
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
          size="20px"
        />
      )}
    </Div>
  );
};

export default ButtonUser;
