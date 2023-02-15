import React from 'react';
import { View } from 'react-native';
import styled, { withTheme } from 'styled-components';
import TextInputMask from 'react-native-text-input-mask';

const MaskedInput = ({ mask, placeholder, keyboardType, onChangeText }) => (
  <InputWrap>
    <InputMask
      onChangeText={onChangeText}
      mask={mask}
      placeholder={placeholder}
      keyboardType={keyboardType || 'default'}
    />
  </InputWrap>
);

export default withTheme(MaskedInput);

const InputMask = styled(TextInputMask)`
  background-color: white;
  padding-left: 15px;
  padding-right: 15px;

  &:focus {
    background-color: pink;
  }
`;

const InputWrap = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme: { colors } }) => colors.lightgray};
  background-color: white;
  &:focus {
    border-bottom-color: ${({ theme: { colors } }) => colors.primary};
  }
`;
