import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; // Importando os ícones do FontAwesome
import BackButton from './components/BackButton.js'
import Footer from './Footer';

const CarrinhoScreen1 = ({ navigation, route }) => {
  const { item } = route.params;
  const [quantity, setQuantity] = useState(1); // Estado para controlar a quantidade
console.log(item)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.details}>
         <BackButton />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.day}</Text>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={decreaseQuantity}>
              <FontAwesome name="minus" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity}>
              <FontAwesome name="plus" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </Card>

      <View style={styles.actionButtons}>
        <Button
          mode="contained"
          style={[styles.button, styles.addToCartButton]}
          onPress={() => {
            const cartItem = {
              id: item.id,
              category: item.category,
              name: item.name,
              price: (quantity * item.price).toFixed(2), // Substitua pelo preço real do item
              quantity: quantity,
              path: item.imageUrl,
            };

            navigation.navigate('CarrinhoScreen', {
              items: cartItem,
            });
          }}
        >
          Adicionar ao carrinho
        </Button>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Resumo do Pedido</Text>
        <View style={styles.summaryDetails}>
          <Text>Total de Itens: {quantity}</Text>
          <Text>Subtotal: R$ {(quantity * item.price).toFixed(2)}</Text>
          <Text>Frete: Grátis</Text>
          <Text style={styles.total}>Total: R$ {(quantity * item.price).toFixed(2)}</Text>
        </View>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  details: {
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  quantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    backgroundColor: '#EA1D2C',
  },
  summary: {
    backgroundColor: '#f1f1f1',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryDetails: {
    marginBottom: 10,
  },
  total: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default CarrinhoScreen1;
