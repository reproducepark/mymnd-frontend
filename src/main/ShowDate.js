import React from 'react';
import styled from 'styled-components';

const dateFontSize = 23;
const dateTopPos = 67;

const Container = styled.div`
  position: relative;
`;

const DateText = styled.div`
  color: white;
  font-size: ${dateFontSize}px;
  font-variant: tabular-nums;
  text-align: center;
  font-weight: 700;
  position: absolute;
`;

const Date1 = styled(DateText)`
  top: ${dateTopPos}px;
  left: 158px;
`;

const Date2 = styled(DateText)`
  top: ${dateTopPos+33}px;
  left: 158px;
`;

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();   

  return `${year.toString().slice(-2)}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

const ShowDate = ({ installedDate, lockedDate }) => {
  return (
    <Container>
      <Date1>{formatDate(installedDate)}</Date1>
      <Date2>{formatDate(lockedDate)}</Date2>
    </Container>
  );
};

export default ShowDate;