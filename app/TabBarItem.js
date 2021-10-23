import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const TabBarItem = ({ type, setType, title, border }) => (
  <Pressable
    onPress={() => setType(title)}
    style={({ pressed }) => [
      styles.item,
      {
        backgroundColor: pressed ? '#efefef' : '#ffffff',
      },
      border ? styles.border : null,
      type === title ? styles.selected : null,
    ]}>
    <Text style={[styles.itemText, title === type ? styles.bold : null]}>
      {title}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#ffffff',
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: '#dddddd',
  },
  itemText: {
    color: '#777777',
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TabBarItem;
