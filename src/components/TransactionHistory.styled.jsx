import styled from "@emotion/styled";

export const Table = styled.table`
  margin: 10px auto 0 auto;
  width: 310px;
  border-spacing: 0;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const TrTableHead = styled.tr`
  background-color: blue;
  color: white;
  height: 35px;
  text-align: center;
  text-transform: uppercase;
  th {
    width: calc(100% / 3);
    :not(:last-child) {
      border-right: 1px solid #99d7f9;
    }
  }
`;

export const TrTableItem = styled.tr`
  height: 35px;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(even) {
    background-color: #e2e2e2;
  }
  td {
    :not(:last-child) {
      border-right: 1px solid #d5d4d4;
    }
  }
`;
