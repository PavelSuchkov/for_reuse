import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled, { withTheme } from 'styled-components';

class Preloader extends Component {
  state = { isLoading: false };

  componentDidMount() {
    const { loader } = this.props;

    if (loader) {
      this.preload(loader);
    }
  }

  preload = async loader => {
    this.setState({ isLoading: true });

    try {
      if (Array.isArray(loader)) {
        const requests = loader.map(item => item());
        await Promise.all(requests);
      } else {
        await loader();
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const {
      children,
      theme: { colors },
      jc,
    } = this.props;
    const { isLoading } = this.state;

    return (
      <Container jc={jc}>
        {isLoading ? (
          <ActivityIndicator size={'large'} color={colors.primary} />
        ) : (
          children
        )}
      </Container>
    );
  }
}

export default withTheme(Preloader);

const Container = styled(View)`
  flex: 1;
  background-color: ${({ bg }) => (bg ? bg : 'white')};
  padding: ${({ pad }) => (pad ? pad : '0')};
  justify-content: ${({ jc }) =>
    (jc === 'sb' && 'space-between') ||
    (jc === 'center' && 'center') ||
    'flex-start'};
  align-items: stretch;
  width: ${({ width }) => (width ? width : '100%')};
  margin-bottom: ${({ mb }) => (mb ? mb : '0')};
`;
