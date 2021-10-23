import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({ todos, type, toggleComplete, deleteTodo }) => {
  const getVisibleTodos = () => {
    switch (type) {
      case 'All':
        return todos;
      case 'Active':
        return todos.filter(todo => !todo.complete);
      case 'Complete':
        return todos.filter(todo => todo.complete);
    }
  };
  todos = getVisibleTodos();
  todos = todos.map(todo => {
    return (
      <Todo
        key={todo.todoIndex}
        todo={todo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    );
  });
  return <View>{todos}</View>;
};

export default TodoList;
