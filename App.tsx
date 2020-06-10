import React from 'react';
import {StatusBar} from 'react-native';

import {Container, TextContainer} from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Container>
        <TextContainer>TrustNavigation</TextContainer>
      </Container>
    </>
  );
};

export default App;
