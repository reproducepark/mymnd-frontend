import React from 'react';
import styled from 'styled-components';
import bg_wodate from "../images/bg_wodate_scale.png"
import ShowCamera from './ShowCamera';
import ShowDate from './ShowDate';
import ShowDateDiff from './ShowDateDiff'
import { useState } from 'react';
import DatePickerModal from './DatePickerModal';

const Container = styled.div`
    background-image: url(${bg_wodate});
    background-size: cover;
    background-position: bottom;
    height: 100vh;
`;

const HiddenButton = styled.button`
    width: 70px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0);
    position: absolute;
    border: 2px solid #000000;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
`

function MainPage() {
    const [installedDate, setInstalledDate] = useState(new Date(2024, 7, 6, 20, 11, 0));
    const [lockedDate, setLockedDate] = useState(new Date(2024, 3, 26, 21, 13, 0));
    const [showModal, setShowModal] = useState(0);

    const toggleModal = () => {
        if (showModal < 3) {
            setShowModal(showModal + 1);
        }
        else {
            setShowModal(0);
        }
    }
    return (
        <Container>
            <ShowCamera />
            <ShowDate installedDate={installedDate} lockedDate={lockedDate} />
            <ShowDateDiff lockedDate={lockedDate} />
            <HiddenButton onClick={toggleModal} />
            {showModal > 1 && <DatePickerModal
                installedDate={installedDate}
                setInstalledDate={setInstalledDate}
                lockedDate={lockedDate}
                setLockedDate={setLockedDate}
                showModal={showModal > 0} />}
        </Container>
    );
}

export default MainPage;