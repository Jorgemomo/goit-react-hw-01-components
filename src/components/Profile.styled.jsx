import styled from "@emotion/styled";

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const DivCard = styled.div`
  margin: 0 auto;
  width: 310px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`;

export const ImgAvatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background-color: ${randomColor};
`;

export const PUserName = styled.p`
  margin-top: 30px;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 500;
`;

export const PUserInfo = styled.p`
  margin-top: 0;
  font-size: 16px;
  color: gray;
`;

export const UlStatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const LiStatsItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  width: 100%;
  background-color: ${randomColor};
  :not(:last-child) {
    border-right: 1px solid grey;
  }
  border-top: 1px solid grey;
`;

export const SpanLabel = styled.span`
  color: gray;
  font-size: 16px;
`;

export const SpanQuantity = styled.span`
  font-size: 16px;
  font-weight: 650;
`;
