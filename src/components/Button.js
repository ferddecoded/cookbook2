import styled from 'styled-components';

export default styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  margin: 20px 0px;
  font-family: 'Arimo';
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border: none;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
`;