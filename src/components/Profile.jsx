import PropTypes from "prop-types";

import {
  DivCard,
  DivDescription,
  ImgAvatar,
  PUserName,
  PUserInfo,
  UlStatsList,
  LiStatsItem,
  SpanLabel,
  SpanQuantity,
} from "./Profile.styled.jsx";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <DivCard>
      <DivDescription>
        <ImgAvatar src={avatar} alt="User avatar" />
        <PUserName>{username}</PUserName>
        <PUserInfo>@{tag}</PUserInfo>
        <PUserInfo>{location}</PUserInfo>
      </DivDescription>

      <UlStatsList>
        <LiStatsItem>
          <SpanLabel>Followers</SpanLabel>
          <SpanQuantity>{followers}</SpanQuantity>
        </LiStatsItem>
        <LiStatsItem>
          <SpanLabel>Views</SpanLabel>
          <SpanQuantity>{views}</SpanQuantity>
        </LiStatsItem>
        <LiStatsItem>
          <SpanLabel>Likes</SpanLabel>
          <SpanQuantity>{likes}</SpanQuantity>
        </LiStatsItem>
      </UlStatsList>
    </DivCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
