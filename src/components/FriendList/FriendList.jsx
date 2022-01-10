import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { Container } from './FriendList.styled.jsx';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
