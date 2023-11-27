import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Footer';

const TelaEndereco = ({ navigation }) => {
  const [endereco, setEndereco] = useState('');
  const [enderecoCadastrado, setEnderecoCadastrado] = useState(false);

  const handleAdicionarEndereco = () => {
    // Lógica para adicionar o endereço
    console.log('Endereço adicionado:', endereco);
    // Simulação de sucesso ao adicionar o endereço
    setEnderecoCadastrado(true);
    navigation.navigate('InitialEndereco', {address: endereco})
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="map-marker" size={40} color="#EA1D2C"></Icon>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#EA1D2C'}}> {endereco}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Adicionar Endereço</Text>
        {!enderecoCadastrado ? (
          <>
            <TextInput
              style={styles.input}
              placeholder="Digite seu endereço"
              onChangeText={(text) => setEndereco(text)}
              value={endereco}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleAdicionarEndereco}>
              <Text style={styles.buttonText}>Adicionar Endereço</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.successText}>Endereço cadastrado com sucesso!</Text>
        )}
      </View>
       <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#EA1D2C',
    padding: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  successText: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
  },
});

export default TelaEndereco;
