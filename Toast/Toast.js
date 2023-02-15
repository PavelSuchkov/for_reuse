import React, { useState, useEffect } from 'react';
import { Animated, View } from 'react-native';
import styled from 'styled-components';

const Toast = props => {
  const { children, toggleToast } = props;
  const [fadeAnim] = useState(new Animated.Value(0.9));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      delay: 1000,
      duration: 2000,
    }).start(() => toggleToast());
  }, [fadeAnim, toggleToast]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      <ToastContainer>{children}</ToastContainer>
    </Animated.View>
  );
};

export default Toast;

const ToastContainer = styled(View)`
  position: absolute;
  bottom: 10;
  background: ${({ theme: { colors } }) => colors.black};
  align-self: center;
  flex-direction: row;
  padding: 16px 26px;
  border-radius: 6px;
`;
