import PropTypes from "prop-types";

import { FriendListItem } from "./FriendListItem";
import { UlSection } from "./FriendList.styled";

const FriendList = ({ friends }) => {
  return (
    <UlSection>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </UlSection>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};

export default FriendList;
