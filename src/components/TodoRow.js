import React from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
// Icons
import editIcon from '../img/edit.png';
import deleteIcon from '../img/delete.png';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, updateTodoCheck } from '../redux/modules/todo';

function TodoRow({ item, index }) {
  const dispatch = useDispatch();
  const { todoList } = useSelector((state) => state.todo);

  // todo 수정에 필요한 index값 리덕스 스토어에 저장
  const handleEdit = () => {
    dispatch(editTodo(index));
  };

  // todo 삭제 함수
  const handleRemove = () => {
    if (!window.confirm('삭제하시겠습니까?')) return;
    dispatch(deleteTodo(index));
  };

  const handleChecked = (e) => {
    dispatch(updateTodoCheck(index));
  };

  return (
    <Container>
      <Item>
        <TextBox checked={todoList[index]?.is_select}>{`${index + 1}. ${
          item.text
        }`}</TextBox>
        <ButtonBox>
          <Checkbox
            checked={todoList[index]?.is_select}
            onChange={handleChecked}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <button className='edit' onClick={handleEdit} />
          <button className='delete' onClick={handleRemove} />
        </ButtonBox>
      </Item>
    </Container>
  );
}

export default TodoRow;

// styled-components
const Container = styled.div`
  margin: 13px 0;
  padding-bottom: 10px;
  width: 80%;
  text-align: left;
  border-bottom: 1px solid #afafaf;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  font-size: 24px;
  &:hover {
    top: -2px;
  }

  span {
    width: 100%;
    cursor: pointer;
  }
`;

const TextBox = styled.span`
  text-decoration: ${(props) => props.checked && 'line-through'};
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 5px;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    filter: invert(100);
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &.edit {
      background-image: url(${editIcon});
      background-size: 100% 100%;
    }
    &.delete {
      background-image: url(${deleteIcon});
      background-size: 100% 100%;
    }
  }
`;
