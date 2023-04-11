import { FaUserCircle } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Button, Div, DivButton } from "./ButtonUser.styled";
import { getLoggedIn, getUserName } from "../../redux/auth/auth-selectors";
import { AvatarComponent } from "avatar-initials";

const ButtonUser = ({ toggleModal }) => {
  const logged = useSelector(getLoggedIn);
  const user = useSelector(getUserName);

  return (
    <Div>
      {logged && user.name ? (
        <DivButton>
          <Button onClick={toggleModal}>
            <AvatarComponent
              classes="rounded-full"
              useGravatar={false}
              size={30}
              // primarySource={currentUser.Avatar}

              color="#000000"
              background="#f1f1f1"
              fontSize={20}
              fontWeight={500}
              offsetY={18}
              initials={`${user.name[0].toUpperCase()}${user.lastName[0].toUpperCase()}`}
            />
          </Button>
        </DivButton>
      ) : (
        // <FiUserCheck
        //   onClick={toggleModal}
        //   style={{ cursor: "pointer" }}
        //   size="20px"
        // />
        <FaUserCircle
          onClick={toggleModal}
          style={{ cursor: "pointer" }}
          size="30px"
        />
      )}
    </Div>
  );
};

export default ButtonUser;
