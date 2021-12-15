import React from 'react';
import styled from 'styled-components';

// Components
import Content from './components/Content';

function App() {
  return (
    <Container>
      <Content />
    </Container>
  );
}

export default App;

// styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
`;
