import React from 'react';
import styled from 'styled-components';
import bg_wodate from "../images/bg_wodate_scale.png"
import ShowCamera from './ShowCamera';
import ShowDate from './ShowDate';
import ShowDateDiff from './ShowDateDiff'
import { useState, useEffect } from 'react';
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
    // border: 2px solid #000000;
    border: 0;
    top: 3%;
    left: 50%;
    transform: translate(-50%, -50%);
`


function MainPage() {
    function getInitialDate(key) {
        const savedDate = localStorage.getItem(key);
        return savedDate !== null ? new Date(JSON.parse(savedDate)) : new Date(2024, 7, 6, 20, 11, 0);
    }

    const [installedDate, setInstalledDate] = useState(getInitialDate('installedDate'));
    const [lockedDate, setLockedDate] = useState(getInitialDate('lockedDate'));
    const [showModal, setShowModal] = useState(0);

    useEffect(() => {
        localStorage.setItem('installedDate', JSON.stringify(installedDate));
        localStorage.setItem('lockedDate', JSON.stringify(lockedDate));
      }, [installedDate, lockedDate]);

    const toggleModal = () => {
        if (showModal < 3) {
            setShowModal(showModal + 1);
        }
    }
    return (
        <Container>
            <ShowCamera />
            <ShowDate installedDate={installedDate} lockedDate={lockedDate} />
            <ShowDateDiff lockedDate={lockedDate} />
            <HiddenButton onClick={toggleModal} />
            {showModal > 2 && <DatePickerModal
                installedDate={installedDate}
                setInstalledDate={setInstalledDate}
                lockedDate={lockedDate}
                setLockedDate={setLockedDate}
                showModal={showModal}
                setShowModal={setShowModal}/>}
        </Container>
    );
}

export default MainPage;