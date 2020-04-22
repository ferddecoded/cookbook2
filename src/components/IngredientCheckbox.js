import React from 'react';
import styled , { css} from 'styled-components';

const Container = styled.li`
  flex-basis: 50%;
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

  &::before {
  content:'';
  -webkit-appearance: none;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.secondary};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
  padding: 5px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  margin-right: 5px;
  }

  ${({ checked }) => checked && css`
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 2px;
      left: 5px;
      width: 4px;
      height: 8px;
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