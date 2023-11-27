import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView,ScrollView } from 'react-native';

import Footer from './Footer';

const TelaFinalizarCompra = ({ navigation, route }) => {
  const { item } = route.params;

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>
        Total: R$ {(item.price * item.quantity).toFixed(2)}</Text>
      </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
        contentContainerStyle={{
          ...styles.scrollViewContent,
          paddingBottom: 400,
        }}>
      <Text style={styles.title}>Resumo da Compra</Text>
      <FlatList
        data={item}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.itemList}
      />
      <View style={styles.summary}>
        <Text style={styles.totalText}>Total a Pagar: {item.total}</Text>

        <View style={styles.deliveryDetails}>
          <Text style={styles.detailText}>Endereço de Entrega: {item.address}</Text>
          <Text style={styles.detailText}>Método de pagamento: {item.payment}</Text>
          <Text style={styles.detailText}>Previsão de Entrega: 20 a 25 minutos</Text>
        </View>
      </View>
      <Footer navigation={navigation} />
      </ScrollView>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    color: '#555',
  },
  summary: {
    marginVertical: 20,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deliveryDetails: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#ddd',
  },
  detailText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TelaFinalizarCompra;
