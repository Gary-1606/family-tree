import React from 'react';
import styled from 'styled-components';
import { Spacing } from '@shared/styles/styles';
import { Colors } from '@shared/styles/colors';

interface Props {
  buttonText: string;
  onBtnClick: (e: any) => void;
  isDisabled?: boolean;
}

export const Button: React.FC<Props> = ({
  isDisabled = false,
  buttonText,
  onBtnClick,
}) => {
  return (
    <S.Button disabled={isDisabled} onClick={(e) => onBtnClick(e)}>
      {buttonText}
    </S.Button>
  );
};

const S = {
  Button: styled.button<{ disabled: boolean }>`
    padding: ${Spacing.u3};
    background-color: ${Colors.blue.base};
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    color: ${Colors.white.base};
    outline: none;
    border: 0;
    border-radius: ${Spacing.u1};
    min-width: 120px;
    &:hover,
    &:focus {
      cursor: pointer;
      opacity: 0.8;
    }
  `,
};
