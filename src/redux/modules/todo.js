import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
  updateIndex: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    // ㅅodo 추가
    addTodo: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.concat({
          text: action.payload,
          is_select: false,
        }),
      };
    },

    // Todo 삭제
    deleteTodo: (state, action) => {
      return {
        ...state,
        todoList: state.todoList.filter((todo, idx) => idx !== action.payload),
      };
    },

    // Todolist 에 todo 수정할때 필요한 index 값
    editTodo: (state, action) => {
      return { ...state, updateIndex: action.payload };
    },

    // Todo 수정
    updateTodo: (state, action) => {
      state.todoList.splice(state.updateIndex, 1, {
        text: action.payload,
        is_select: false,
      });
    },

    // Todo check 상태 수정
    updateTodoCheck: (state, action) => {
      state.todoList[action.payload].is_select =
        !state.todoList[action.payload].is_select;
    },
  },
});

// 액션 크리에이터
export const { addTodo, deleteTodo, editTodo, updateTodo, updateTodoCheck } =
  todoSlice.actions;

export default todoSlice.reducer;
