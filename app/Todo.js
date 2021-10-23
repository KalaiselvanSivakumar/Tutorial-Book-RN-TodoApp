import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoButton from './TodoButton';

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>{todo.title}</Text>
    <View style={styles.buttons}>
      <TodoButton
        name="Done"
        onPress={() => toggleComplete(todo.todoIndex)}
        complete={todo.complete}
      />
      <TodoButton name="Delete" onPress={() => deleteTodo(todo.todoIndex)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: '#ededed',
    paddingLeft: 14,
    paddingVertical: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Todo;
