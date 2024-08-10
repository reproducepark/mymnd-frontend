import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import mndLogo from '../images/mnd.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    background-color: #252525;
    background-size: cover;
    background-position: bottom;
    height: 100vh;
    display: flex; /* Use flexbox for centering the LogoContainer */
    justify-content: center; /* Center the LogoContainer horizontally within the container */
`;

const LogoContainer = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Aligns Logo and mndLogo vertically */
  width: 80%
  `;

const MndLogo = styled.img`
  height: 110px; /* Adjust height as needed */
`;

const Logo = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 40px;
  color: white;
  font-weight: 900;
  text-align: center;
`

const Input = styled.input`
  padding: 15px 20px;
  font-size: 20px;
  border: none;
  border-radius: 999px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
`;

const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: #5A433D;
  padding: 15px 20px;
  border: 1px solid;
  border-color: #47332D;
  width: 100%;
  margin-top: 40px;
  border-radius: 999px;
  font-weight: 600;
`;

const LoginPage = () => {
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        window.location.reload();
      } else {
        alert('Invalid code');
      }
    } catch (error) {
      console.error('Authentication failed:', error);
      alert('Authentication error');
    }
  };

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#252525" />
      </Helmet>
      <Container>
        <LogoContainer>
          <MndLogo src={mndLogo} alt="MND Logo" />
          <Logo>꾹방모바일보안</Logo>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="부여받은 코드를 입력하세요"
              value={code}
              onChange={(e) => setCode(e.target.value)} />
            <Button type="submit">확인</Button>
          </form>
        </LogoContainer>
      </Container>
    </>
  )
}

export default LoginPage;