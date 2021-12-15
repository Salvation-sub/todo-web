import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addTodo, editTodo, updateTodo } from '../redux/modules/todo';

// Components
import TodoList from './TodoList';

function Todo() {
  const [input, setInput] = useState('');
  const { updateIndex, todoList } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  let todoCount = 0;

  todoList.forEach((todo) => todo.is_select && todoCount++);

  // 엔터 키 값 받아와 todo 추가 및 수정
  const handleInputKeyPress = (e) => {
    if (e.code === 'Enter') {
      if (updateIndex !== null) {
        // todo 수정
        dispatch(updateTodo(input));
        setInput('');
      } else {
        // todo 추가
        dispatch(addTodo(input));
        setInput('');
      }
    }
  };

  // todo 수정중 닫기 함수
  const handleCancelEdit = () => {
    dispatch(editTodo(null));
  };

  return (
    <Container>
      {updateIndex !== null && (
        <UpdateGuide>
          <span>{`${updateIndex + 1}번 수정중`}</span>
          <button onClick={handleCancelEdit}>X</button>
        </UpdateGuide>
      )}

      <Input
        type='text'
        placeholder='오늘의 할 일 기록'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleInputKeyPress}
      />
      <TodoDone>{`오늘 끝낸 일 ${todoCount} / ${todoList.length}`}</TodoDone>
      <TodoList />
    </Container>
  );
}

export default Todo;

// styled-components
const Container = styled.div`
  margin-top: 44px;
  text-align: center;
`;

const TodoDone = styled.div`
  margin-top: 20px;
  color: #4584ff;
  font-weight: bold;
`;

const UpdateGuide = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  span {
    padding: 7px 10px;
    display: block;
    width: 70%;
    text-align: left;
    background: #fe9601;
  }

  button {
    width: 8%;
    color: #fff;
    font-size: 1.1em;
    border: none;
    background: #fe9601;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 7px 10px;
  width: 80%;
  height: 33px;
  outline: none;
  color: #fff;
  font-size: 22px;
  border: 1px solid #f2f2f2;
  border-radius: 11px;
  background: transparent;
  &::placeholder {
    color: #f2f2f2;
  }
`;
