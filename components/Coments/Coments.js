import { Ul } from "./Coments.styled";

const Comments = ({ coments }) => {
  console.log(coments);
  return (
    <Ul>
      {coments.map((item, index) => (
        <li key={item._id}>
          <p>{item.author}</p>
          <p>{item.text}</p>
        </li>
      ))}
    </Ul>
  );
};

export default Comments;
