import React from 'react';
import styled , { css} from 'styled-components';

const Container = styled.li`
  flex-basis: 50%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const Input = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
  font-size: ${({ theme }) => theme.label.fontSize};
  color: ${({ theme }) => theme.black};

  &::before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.secondary};
  padding: 5px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  height: 20px;
  width: 20px;
  }

  ${({ checked }) => checked && css`
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: 7px;
      width: 6px;
      height: 14px;
      border: solid ${({ theme }) => theme.secondary};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `}
`;

const IngredientCheckbox = ({ id, checked, onChange, ingredientIndex }) => {
  return (
    <Container>
      <Input type="checkbox" checked={checked} id={id} />
      <Label checked={checked} for={id} onClick={() => {
        onChange(ingredientIndex);
      }}>{id}</Label>
    </Container>
  );
};

export default IngredientCheckbox;