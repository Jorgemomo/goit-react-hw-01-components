import styled from "@emotion/styled";

export const UlSection = styled.ul`
  margin: 10px auto 0 auto;
  width: 310px;
  padding: 0;
`;

export const FriendItem = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const SpanStatus = styled.span`
  width: 25px;
  height: 25px;
  margin-left: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.status ? "green" : "red")};
`;

export const ImgAvatar = styled.img`
  margin-left: 15px;
  width: 60px;
`;

export const PName = styled.p`
  margin-left: 10px;
  font-size: 24px;
  font-weight: 500;
`;
