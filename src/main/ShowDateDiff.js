import React from 'react';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const dateDiffTopPos = 490;

const Container = styled.div`
    position: relative;
`;

const DateDiff1 = styled.div`
    color: #cfcfcf;
    font-size: 18px;
    font-variant: tabular-nums;
    text-align: center;
    position: absolute;
    font-weight: 500;
    top: ${dateDiffTopPos}px;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const DateDiff2 = styled.div`
    color: #cfcfcf;
    font-size: 18px;
    font-variant: tabular-nums;
    text-align: justify;
    position: absolute;
    font-weight: 500;
    top: ${dateDiffTopPos+20}px;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ShowDateDiff = ({ lockedDate }) => {
    const [timeDifference, setTimeDifference] = useState(0);
    const [overNine, setOverNine] = useState(true);

    const formatTimeDifference = (difference) => {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return [`${days}일`, `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`];
    };

    useEffect(() => {
        const timerID = setInterval(() => {
            const currentTime = new Date();
            const difference = currentTime - lockedDate;
            setTimeDifference(difference);
        }, 1000);

        // when time difference is bigger than 9 days, change marginLeft
        if (timeDifference > 9 * 24 * 60 * 60 * 1000) {
            setOverNine(true);
        } else {
            setOverNine(false);
        }

        return () => {
            clearInterval(timerID);
        };
    }, [lockedDate]);

    return (
        <Container>
            <DateDiff1 overNine={overNine}>{formatTimeDifference(timeDifference)[0]}</DateDiff1>
            <DateDiff2>{formatTimeDifference(timeDifference)[1]}</DateDiff2>
        </Container>
    );
};

export default ShowDateDiff;