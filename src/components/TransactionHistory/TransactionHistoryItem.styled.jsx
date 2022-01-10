import styled from '@emotion/styled';

export const TableItem = styled.tr`
  height: 40px;
  text-align: center;
  text-transform: capitalize;

  &:nth-child(even) {
    background-color: #08b9cd;
  }
`;

export const BodyCell = styled.td`
  :not(:last-child) {
    border-right: 1px solid #079aab;
  }
`;
