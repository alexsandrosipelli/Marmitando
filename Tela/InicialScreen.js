import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, } from 'react-native';
import Footer from './Footer';

const InicialScreen = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  const navigateToAddress = () => {
    navigation.navigate('TelaEndereco');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Logo}>
        <Text style={styles.title}> Bem vindo ao Marmitando </Text>
        <Image source={require('./Logo.jpg')} style={styles.imagemCard} />
      </View>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToScreen('TelaSemana')}>
        <Text style={styles.buttonText}> Pratos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAddress}>
        <Text style={styles.buttonText}>Adicionar Endereço</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('CarrinhoScreen')}>
        <Text style={styles.buttonText}>Ir para o carrinho </Text>
      </TouchableOpacity>

      {/* Adicionando o Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#EA1D2C',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  Logo: {
    alignItems: 'center',
  },
  imagemCard: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default InicialScreen;
