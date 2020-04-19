import styled from 'styled-components';

export default styled.a`
  font-size: ${({ theme }) => theme.link.fontSize};
  font-weight: ${({ theme }) => theme.link.fontWeight};
  padding: 10px 0px;

  text-decoration: none;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    cursor: pointer;
  }
`;