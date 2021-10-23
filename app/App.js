import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import SubmitButton from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.setType = this.setType.bind(this);
  }

  inputChange(inputValue) {
    // console.log(' Input Value: ', inputValue);
    this.setState({
      inputValue,
    });
  }

  submitTodo() {
    const { inputValue } = this.state;
    if (inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState(
      {
        todos,
        inputValue: '',
      },
      // () => {
      //   console.log('State: ', this.state);
      // },
    );
  }

  toggleComplete(index) {
    const { todos } = this.state;
    todos.some(todo => {
      if (todo.todoIndex === index) {
        todo.complete = !todo.complete;
        return true;
      }
      return false;
    });
    this.setState({ todos });
  }

  deleteTodo(index) {
    let { todos } = this.state;
    todos = todos.filter(todo => todo.todoIndex !== index);
    this.setState({ todos });
  }

  setType(type) {
    this.setState({ type });
  }

  render() {
    const { inputValue, todos, type } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList
            todos={todos}
            type={type}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />
          <SubmitButton submitTodo={this.submitTodo} />
        </ScrollView>
        <TabBar type={type} setType={this.setType} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
