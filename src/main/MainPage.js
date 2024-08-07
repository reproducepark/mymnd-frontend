import React from 'react';
import styled from 'styled-components';
import bg_wodate from "../images/bg_wodate.png"

const Container = styled.div`
  background-image: url(${bg_wodate});
  background-size: cover;
  background-position: bottom;
  height: 100vh;
`;

function MainPage() {
    return (
        <Container>
        </Container>
    );
}

export default MainPage;