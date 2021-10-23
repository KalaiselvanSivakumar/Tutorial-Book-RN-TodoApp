import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({ setType, type }) => (
  <View style={styles.container}>
    <TabBarItem type={type} setType={setType} title="All" />
    <TabBarItem type={type} setType={setType} border title="Active" />
    <TabBarItem type={type} setType={setType} border title="Complete" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
});

export default TabBar;
