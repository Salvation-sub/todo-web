import React from 'react';
import styled from 'styled-components';

// Components
import Clock from './Clock';
import Todo from './Todo';

function Content() {
  return (
    <Container>
      <Clock />
      <Todo />
    </Container>
  );
}

export default Content;

// styled-components
const Container = styled.div`
  width: 90%;
  max-width: 500px;
  height: 90%;
  color: #fff;
  background: rgba(0, 0, 0, 0.3);
  overflow: auto;
`;
