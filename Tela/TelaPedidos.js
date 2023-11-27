import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Footer from './Footer';

const TelaPedidos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Pedidos</Text>
      {/* Adicione aqui o conteúdo da tela de pedidos */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  // Outros estilos conforme necessário
});

export default TelaPedidos;
