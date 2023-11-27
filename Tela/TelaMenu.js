import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const TelaMenu = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MENU HIAGO VAI FAZER ???</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default TelaMenu;
