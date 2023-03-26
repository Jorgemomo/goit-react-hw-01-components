import styled from "@emotion/styled";

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
  margin: 10px auto 0 auto;
  width: 310px;
  background-color: white;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
`;

export const H2Title = styled.h2`
  padding: 15px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
`;

export const UlStatList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const LiStatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: ${randomColor};
`;

export const SpanLabel = styled.span`
  font-size: 16px;
  color: white;
`;

export const SpanPercentage = styled.span`
  font-size: 16px;
  color: white;
`;
