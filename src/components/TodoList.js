import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// Components
import TodoRow from './TodoRow';

function TodoList() {
  // 리덕스에 저장해놓은 todolist 받아와서 뿌려주기
  const { todoList } = useSelector((state) => state.todo);

  return (
    <Container>
      {todoList?.map((item, idx) => (
        <TodoRow item={item} key={idx} index={idx} />
      ))}
    </Container>
  );
}

export default TodoList;

// styled-components
const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
