import styled from '@emotion/styled';

export const Container = styled.div`
  text-align: center;
`;

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const StatisticsItem = styled.li`
  padding-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;

  :first-of-type {
    color: #137708;
  }

  :nth-of-type(2) {
    color: #d47c09;
  }
  :nth-of-type(3) {
    color: #d40902;
  }
  :nth-of-type(4) {
    color: pink;
    padding-top: 10px;
  }
  :nth-of-type(5) {
    color: red;
  }
`;
