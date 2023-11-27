import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Footer from './Footer';

const TelaPagamento = ({ navigation, route }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const { item, totalPayment } = route.params
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <Picker
          style={styles.componentPicker}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedValue(itemValue)
          }>
          <Picker.Item label="Selecinar forma de pagamento" value="" />
          <Picker.Item label="Cartão de Crédito" value="Credito" />
          <Picker.Item label="Cartão de Débito" value="Debito" />
          <Picker.Item label="Dinheiro" value="Dinheiro" />
        </Picker>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const registers = {
              address: 'Rua Armando Silva - 220',
              payment: selectedValue,
              total: totalPayment,
            }
            navigation.navigate("TelaFinalizarCompra", {
              item: registers
            })
          }}>
          <Text style={styles.buttonText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  body: {
    flex: 1,
    paddingBottom: 30,
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#EA1D2C',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: '50%',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  componentPicker: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    marginBottom: '80%',
    marginTop: '80%',
    backgroundColor: 'black',
  }
});

export default TelaPagamento;
