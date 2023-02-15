import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styled, { withTheme } from 'styled-components';
import { View } from 'react-native';

const CompanyAvatar = props => {
  const {
    theme: { colors },
    mr,
  } = props;
  return (
    <Circle mr={mr}>
      <Icon name="truck" size={18} color={colors.gray} />
    </Circle>
  );
};

export default withTheme(CompanyAvatar);

export const Circle = styled(View)`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-right: ${({ mr }) => (mr ? mr : '0')};
`;
