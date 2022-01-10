import styled from '@emotion/styled';
import getRandomHexColor from 'helpers/RandomHexColor';

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.span``;

export const Percentage = styled.span`
  font-size: 16px;
`;
