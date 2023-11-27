import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native';
import Footer from './Footer'

import Icon from 'react-native-vector-icons/FontAwesome';

const TelaItens = ({navigation, route}) => {
  const DATA = [
    {
      id: 1,
      name: 'Coca-Cola Zero',
      category: 'Bebidas',
      price: 7.99,
      imageUrl: 'https://images.unsplash.com/photo-1596803244535-925769f389fc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyfHxDb2NhLWNvbGElMjB6ZXJvfGVufDB8fHx8MTcwMDMzNTE1MXww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
      extension: 'jpg',
    },
    {
      id: 2,
      name: 'Marmitex Alex',
      category: 'Marmitas',
      price: 30.00,
      imageUrl: 'https://images.unsplash.com/photo-1616645258469-ec681c17f3ee?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw2fHxwYWNrZWQlMjBsdW5jaHxlbnwwfHx8fDE3MDAzMzQ1MzZ8MA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
      extension: 'jpg',
    },
    {
      id: 3,
      name: 'Bolo de chocolate no pote',
      category: 'Sobremesas',
      price: 15.00,
      imageUrl: 'https://images.unsplash.com/photo-1663525572640-ce318c497a9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyfHxjaG9jb2xhdGUlMjBjYWtlJTIwaW4lMjBjdXB8ZW58MHx8fHwxNzAwMzM1MTAxfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
      extension: 'jpg',
    },
  ]

  function filtrarItens(){
    return DATA.filter(item => item.category == route.params.category)
  }

  function passToCart(){
    const cartItem = {
      id: item.id,
      day: item.name,
      category: item.category,
      description: item.name, // Substitua pelo preço real do item
      descriptionDay: "Bom apetite",
      path: item.path,
    }
    
    navigation.navigate("CarrinhoScreen1", {item: cartItem})
  }

  const itensFiltrados = filtrarItens();

  const Card = ({ item, event, link }) => (
    <Pressable>
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
          <TouchableOpacity style={styles.cardButtonAdd} onPress={() => navigation.navigate('CarrinhoScreen1', {item: item})}>
            <Text style={{fontWeight: 'bold'}}>Adicionar ao carrinho</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );

  const ShowCard = ({ item }) => (
    <Card 
      item={item}
      link={item.imageUrl}
      event={() => passToCart()}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          autoCorrect={false}
          placeholder={'Busque Sua Comida Aqui'}
          placeholderTextColor="#A6A29F"
          clearButtonMode="always">
        </TextInput>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}> Itens </Text>
        <ScrollView>
          <FlatList
            style={styles.flatList}
            data={itensFiltrados}
            renderItem={ShowCard}
            keyExtractor={(itensFiltrados) => itensFiltrados.id}
            scrollEnabled={false}
          />
        </ScrollView>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

export default TelaItens;

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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  searchInput: {
    flex: 1, // O valor 1 fo flex quer dizer que ele vai ocupar todo o espaço disponível
    backgroundColor: '#E9E9E9',
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 45,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    paddingBottom: 30,
  },
  bodyText: {
    fontSize: 18,
    paddingLeft: 10,
    flexDirection: 'row',
    textAlign: 'center',
    paddingBottom: 5,
  },
  flatList: {
    flex: 1,
    margin: 10,
    padding: 23,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    width: 350,
    height: 150,
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
  cardButtonAdd: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    backgroundColor: '#FFF',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});
