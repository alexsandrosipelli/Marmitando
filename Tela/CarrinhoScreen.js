// CarrinhoScreen.js
import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, ScrollView, Pressable, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from './Footer';

//Chamar a tela de TelaFinalizarCompra e passar todas as informações passadas do carrinho até a tela dos cartões.
//Corrigir o bug da foto não estar sendo enviada para o carrinho.
//Corrigir bug dos itens do carrinho estarem sendo apagados ao selecionar o home depois do carrinho.

const CarrinhoScreen = ({ navigation, route }) => {
  let [DATA, setArray] = useState([])
  let [total, setTotal] = useState(0.00)

  useEffect(() => {
    if (route.params != null && route.params.items) {
      newItemToCart(route.params.items);
      calcularTotal(DATA)
    }
  }, [route.params]);

  useEffect(() => {
    calcularTotal(DATA);
  }, [DATA]);

  function removeItem(id) {
    const updatedArray = DATA.filter(item => item.id !== id);
    setArray(updatedArray);
  }

  function newItemToCart(items) {
    const newItem = {
      id: items.id,
      name: items.name,
      category: items.category,
      price: items.price,
      amount: items.quantity,
      path: items.imageUrl,
      address: 'Rua Armando Silva - 220',
    };

    const existingIndex = DATA.findIndex(item => item.id === newItem.id);

    if (existingIndex !== -1) {
      const updatedArray = DATA.map(item =>
        item.id === newItem.id ? newItem : item
      );
      setArray(updatedArray);
    } else {
      setArray(prevArray => [...prevArray, newItem]);
    }
  }

  function calcularTotal(data) {
    let total = 0

    data.forEach(item => {
      total += parseFloat(item.price)
    })

    setTotal(total.toFixed(2))
  }

  const Card = ({ item, event, link }) => (
    <Pressable onPress={event}>
      <View style={styles.card}>
        <View style={styles.cardImage}>
          <Image 
            style={styles.image}
            source={{
              uri: link,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardInformations}> 
          <Text style={styles.cardText}> 
            {item.name}
          </Text>
          <Text style={styles.cardText}> 
            R$ {item.price}
          </Text>
          <View style={styles.cardIcons}>
            <Pressable onPress={() => 
                        removeItem(item.id)
                        }
            >
              <Icon name="trash-o" size={30} color="#FFF"></Icon>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const ShowCard = ({ item }) => (
    <Card 
      item={item}
      link={item.path}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="map-marker" size={40} color="#EA1D2C"></Icon>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#EA1D2C'}}> 
          Rua Armando Silva - 220
        </Text>
      </View>

      <View style={styles.body}>
        <View style={{ backgroundColor: '#A6A29F', height: 5}} />
        <ScrollView>
          <FlatList
            style={styles.flatList}
            data={DATA}
            renderItem={ShowCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Configurar scrollEnabled como false para travar o conteúdo
          />
        </ScrollView>
        <TouchableOpacity 
          style={styles.touchFinishOrder} 
          onPress={() => navigation.navigate("TelaPagamento", {item: DATA, totalPayment: total})}
        >
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18, paddingBottom: 20}}>
            Total: {total}
          </Text>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>
            Finalizar Pedido
          </Text>
        </TouchableOpacity>
      </View>

     <View>
        <Footer navigation={navigation} />
      </View>
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
  header: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    paddingBottom: 30,
  },
  flatList: {
    flex: 1,
    margin: 10,
    padding: 33,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    width: 350,
    height: 100,
    margin: 10,
    borderRadius: 30,
    backgroundColor: '#EA1D2C',
  },
  cardImage: {
    flex: 1,
    borderRadius: 25,
    margin: 10,
    overflow: 'hidden',
  },
  cardInformations: {
    flex: 1,
    borderRadius: 25,
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchFinishOrder: {
    flex: 1,
    backgroundColor: '#A6A29F',
    height: 80,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default CarrinhoScreen;
