import { Ul } from "./Comments.styled";

const Comments = ({ newComment, comments = [] }) => {
  console.log(comments);
  return (
    <Ul>
      {newComment && (
        <li>
          <p>{newComment.authorName}</p>
          <p>{newComment.authorLastName}</p>
          <p>{newComment.text}</p>
        </li>
      )}

      {comments &&
        comments.map((item, index) => (
          <li key={item._id}>
            <p>{item.authorName}</p>
            <p>{item.authorLastName}</p>
            <p>{item.text}</p>
          </li>
        ))}
    </Ul>
  );
};

export default Comments;
