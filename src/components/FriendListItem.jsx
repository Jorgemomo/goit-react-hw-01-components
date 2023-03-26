import PropTypes from "prop-types";
import { FriendItem, SpanStatus, ImgAvatar, PName } from "./FriendList.styled";

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem key={id}>
      <SpanStatus status={isOnline}></SpanStatus>
      <ImgAvatar src={avatar} alt={name} width="48" />
      <PName>{name}</PName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
