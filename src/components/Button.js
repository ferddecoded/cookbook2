import styled from 'styled-components';

export default styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  margin: 20px 0px;
  font-family: 'Arimo';
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.secondary};
  border: none;
  font-size: 16px;
  font-weight: 700;
  box-shadow: ${({ theme }) => theme.bsSm};
  cursor: pointer;
  position: relative;
  transition: .4s all;

  &:hover {
    box-shadow: ${({ theme }) => theme.bsLg};
  }
`;