// import { PostInfo } from '../PostInfo';
import './UserInfo.scss';

export const UserInfo = ({ post }) => {
  const { user } = post;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
