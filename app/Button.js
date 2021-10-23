import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

const SubmitButton = ({ submitTodo }) => (
  <View style={styles.buttonContainer}>
    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? '#efefef' : '#ffffff',
        },
      ]}
      onPress={submitTodo}>
      <Text style={styles.submit}>Submit</Text>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: '#ffffff',
    width: 200,
    marginTop: 15,
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, .1)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SubmitButton;
