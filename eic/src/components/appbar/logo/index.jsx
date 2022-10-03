import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/images/2.png';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 220px;
  height: 220px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <img src={logo} alt="eic logo" />
      </LogoImg>
    </LogoWrapper>
  );
}
