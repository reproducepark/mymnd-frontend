import React from 'react';
import styled from 'styled-components';
import bg_wodate from "../images/bg_wodate_scale.png"
import ShowCamera from './ShowCamera';

const Container = styled.div`
  background-image: url(${bg_wodate});
  background-size: cover;
  background-position: bottom;
  height: 100vh;
`;

function MainPage() {
    return (
        <Container>
            <ShowCamera/>
        </Container>
    );
}

export default MainPage;