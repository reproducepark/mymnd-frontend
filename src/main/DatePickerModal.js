import React from 'react';
import styled from 'styled-components';
import { useState, useRef } from 'react';
import "react-datepicker/dist/react-datepicker.module.css"

const Modal = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80vh;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ showModal }) => (showModal ? 'translateY(0)' : 'translateY(100%)')};
`;

const DatePickerModal = ({ showModal, installedDate, setInstalledDate, lockedDate, setLockedDate }) => {

  return (
    <Modal showModal={showModal}>
      <DatePicker
        newDate={installedDate}
        setNewDate={setInstalledDate}
          />
    </Modal>
  )
}

const DatePicker = ({ newDate, setNewDate }) => {

  const DateTimeInput = styled.input`
    background-color: #181818;
    appearance: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    padding: 2;
    border: 0;
    color: white;
    font-size: 0px;
  `;

  const Container = styled.div`
    color: white;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0);
    padding: 10px 15px;
  `;

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    return `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  };

  const handleChange = (event) => {
    setNewDate(new Date(event.target.value));
  };

  return (
    <Container>
      설치일시 변경
      <DateTimeInput
        type="datetime-local"
        value={formatDate(newDate)}
        onChange={handleChange}
      />
    </Container>
  )
}

export default DatePickerModal;