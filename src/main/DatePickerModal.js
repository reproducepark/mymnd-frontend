import React, { memo, useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import "react-datepicker/dist/react-datepicker.module.css"
import mndLogo from '../images/mnd.webp'

const Modal = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80vh;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ showModal }) => (showModal > 2 ? 'translateY(0)' : 'translateY(100%)')};
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: #5A433D;
  padding: 10px 10px;
  border: 1px solid;
  border-color: #47332D;
  width: 90%;
  margin-top: 20px;
  border-radius: 999px;
  font-weight: 600;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-end; /* 이 부분 추가하여 아래쪽 정렬 */
  margin-top: auto;
  margin-bottom: 20px;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center; /* Aligns Logo and mndLogo vertically */
`;

const MndLogo = styled.img`
  height: 40px; /* Adjust height as needed */
`;

const Logo = styled.p`
  font-size: 25px;
  color: white;
  width: 80%;
  font-weight: 700;
  text-align: center;
  margin: 15px;
  margin-left: 5px;
`

const Warn = styled.p`
  font-size: 12px;
  color: white;
  width: 80%;
`

const DatePickerModal = ({ showModal, setShowModal, installedDate, setInstalledDate, lockedDate, setLockedDate }) => {
  const [tempInstalledDate, setTempInstalledDate] = useState(installedDate);
  const [tempLockedDate, setTempLockedDate] = useState(lockedDate);

  const linkRef1 = useRef(null);
  const linkRef2 = useRef(null);

  const handleConfirm = () => {
    setShowModal(0);
    setInstalledDate(tempInstalledDate);
    setLockedDate(tempLockedDate);
  }

  return (
    <Modal showModal={showModal}>
      <DatePickerBtn
        oriDate={installedDate}
        setTempDate={setTempInstalledDate}
        title="설치일시 변경"/>
      <DatePickerBtn
        oriDate={lockedDate}
        setTempDate={setTempLockedDate}
        title="차단일시 변경"/>
      <Button onClick={()=>linkRef1.current.click()}>
        카메라 허용
        <a 
          href="./allow.mobileconfig"
          style={{ display: 'none' }}
          ref={linkRef1}>
        </a>
      </Button>
      <Button onClick={()=>linkRef2.current.click()}>
        카메라 차단
        <a 
          href="./disallow.mobileconfig"
          style={{ display: 'none' }}
          ref={linkRef2}>
        </a>
      </Button>
      <Button onClick={handleConfirm}>
        적용
      </Button>
      <BottomSection>
        <LogoContainer>
          <MndLogo src={mndLogo} alt="MND Logo" />
          <Logo>꾹방모바일보안</Logo>
        </LogoContainer>
        <Warn>본 프로젝트는 React에 대한 학습을 목적으로 진행되었으며 제작자는 프로젝트를 이용하며 발생한 문제에 대해 일체 책임지지 않습니다.</Warn>
      </BottomSection>

    </Modal>
  )
}

const DatePickerBtn = memo(({ oriDate, setTempDate, title}) => {
  const datePickerRef = useRef(null);

  const DateTimeInput = styled.input`
    background-color: #252525;
    appearance: none;
    -webkit-appearance: none;
    -webkit-border-radius: 0;
    border: 0px;
    padding: 0px;
    font-size: 0px;
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
    setTempDate(new Date(event.target.value));
  };

  return (
    <>
      <DateTimeInput
        ref={datePickerRef}
        type="datetime-local"
        value={formatDate(oriDate)}
        onChange={handleChange}
      />
      <Button onClick={() => { datePickerRef.current.focus() }}>
        {title}
      </Button>
    </>

  )
})

export default DatePickerModal;