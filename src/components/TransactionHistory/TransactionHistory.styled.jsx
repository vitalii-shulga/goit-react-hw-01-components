import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 20px auto 0 auto;
  width: 600px;

  border-collapse: collapse;
  border-spacing: 0;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 2px 3px 14px 2px rgba(0, 0, 0, 0.41);
  overflow: hidden;
`;

export const Head = styled.tr`
  height: 40px;
  background-color: #045c66;
  text-align: center;
  text-transform: uppercase;
  color: white;
`;

export const HeadCell = styled.th`
  width: calc(100% / 3);

  :not(:last-child) {
    border-right: 1px solid #079aab;
  }
`;
