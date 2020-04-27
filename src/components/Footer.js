import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const FooterText = styled.span`
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Project by: <a href="https://www.ferddecoded.ca">@Ferdinand Ismael</a></FooterText>
    </FooterContainer>
  );
};

export default Footer;