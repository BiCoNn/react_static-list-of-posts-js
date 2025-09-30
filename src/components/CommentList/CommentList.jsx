import { CommentInfo } from '../CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  const hasComments = comments.length > 0;

  return hasComments ? (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} post={{ comment }} />
      ))}
    </div>
  ) : (
    <b data-cy="NoCommentsMessage">No comments yet</b>
  );
};
