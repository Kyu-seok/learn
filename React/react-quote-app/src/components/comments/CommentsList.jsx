import CommentItem from './CommentItem.jsx';
import classes from './CommentsList.module.css';

const CommentsList = (props) => {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;
