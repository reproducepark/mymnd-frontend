import React from 'react';
import styled from 'styled-components';
import bg_wodate from "../images/bg_wodate_scale.png"
import ShowCamera from './ShowCamera';
import ShowDate from './ShowDate';
import { useState } from 'react';

const Container = styled.div`
  background-image: url(${bg_wodate});
  background-size: cover;
  background-position: bottom;
  height: 100vh;
`;

function MainPage() {
    const [installedDate, setInstalledDate] = useState(new Date(2024, 8, 7, 18, 11, 0));
    const [lockedDate, setLockedDate] = useState(new Date(2024, 8, 7, 18, 11, 0));

    return (
        <Container>
            <ShowCamera/>
            <ShowDate installedDate={installedDate} lockedDate={lockedDate}/>
        </Container>
    );
}

export default MainPage;