import React from 'react';
import styled from 'styled-components';
import bg_wodate from "../images/bg_wodate_scale.png"
import ShowCamera from './ShowCamera';
import ShowDate from './ShowDate';
import ShowDateDiff from './ShowDateDiff'
import { useState } from 'react';

const Container = styled.div`
  background-image: url(${bg_wodate});
  background-size: cover;
  background-position: bottom;
  height: 100vh;
`;

function MainPage() {
    const [installedDate, setInstalledDate] = useState(new Date(2024, 7, 6, 20, 11, 0));
    const [lockedDate, setLockedDate] = useState(new Date(2024, 3, 26, 21, 13, 0));

    return (
        <Container>
            <ShowCamera/>
            <ShowDate installedDate={installedDate} lockedDate={lockedDate}/>
            <ShowDateDiff lockedDate={lockedDate}/>
        </Container>
    );
}

export default MainPage;