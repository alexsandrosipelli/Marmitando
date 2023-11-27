import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  modal,
} from 'react-native';
import { Card } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './Footer';

function TelaSemana({ navigation }) {
  const { goBack } = useNavigation();
  const ConteudoCard = [
    {
      id: 1,
      day: 'Segunda',
      category: 'Marmitas',
      price: 20.99,
      description:
        '300G Arroz\n200g Feijao\nLegumes variados\nfrango cozido\n\n',
      name: 'Especial',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/03/53/40/16/1000_F_353401644_uSFbvlklaYfkAalQOLHWQXjhjSxgHVD2.jpg',
    },
    {
      id: 2,
      day: 'Terça',
      category: 'Marmitas',
      price: 20.99,
      description:
        '300G Arroz\n200g Feijao\nPure de batata\ncarne cozida\n\nTudo isso por apenas 20,99',
      name: 'Carne de Panela',
      imageUrl:
        'https://t3.ftcdn.net/jpg/05/31/49/32/240_F_531493238_YOdY3Y4xLpPgHMxo3zegSxl1DgJOsr4k.jpg',
    },
    {
      id: 3,
      day: 'Quarta',
      category: 'Marmitas',
      price: 20.99,
      description:
        '300G Arroz\n400g Feijao\nOvo frito\nfarofa da casa\n\nTudo isso por apenas 20,99',
      name: 'Feijoada',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/02/23/28/14/1000_F_223281440_egCY5DtObqmQlA9YClodL1tb0N6H8Ptc.jpg',
    },
    {
      id: 4,
      day: 'Quinta',
      category: 'Marmitas',
      price: 20.99,
      description:
        '300G Arroz\n200g Feijao\nLinguiça\nContra file assado\n\nTudo isso por apenas 20,99',
      name: 'Churrasco',
      imageUrl:
        'https://img.freepik.com/fotos-premium/lancheira-brasileira-com-salada-de-linguica-de-churrasco-arroz-feijao-e-farofa_496782-181.jpg?w=1380',
    },
    {
      id: 5,
      day: 'Sexta',
      category: 'Marmitas',
      price: 20.99,
      description:
        '300G Arroz\n200g Feijao\nPicadinho de carne\nMacarrão\nFarofa\n\nTudo isso por apenas 20,99',
      name: 'Picadinho de Carne',
      imageUrl:
        'https://as2.ftcdn.net/v2/jpg/05/31/49/41/1000_F_531494108_JXg7yyKI7i4foPbIfCDgOQ7h0HYqQxdH.webp',
    },
    {
      id: 6,
      day: 'Sábado',
      category: 'Marmitas',
      price: 20.99,
      description:
        '300G Arroz\n400g Feijao\nOvo frito\nfarofa da casa\n\nTudo isso por apenas 20,99',
      name: 'Feijoada',
      imageUrl:
        'https://as1.ftcdn.net/v2/jpg/02/23/28/14/1000_F_223281440_egCY5DtObqmQlA9YClodL1tb0N6H8Ptc.jpg',
    },
  ];
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDishDescription, setSelectedDishDescription] = useState('');
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState(
    Array(ConteudoCard.length).fill(0)
  );

  const toggleModal = (description) => {
    setSelectedDishDescription(description);
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => goBack()} style={styles.backButton}
          style={styles.buttonHeader}>
          <MaterialIcons name="arrow-back" size={35} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.paragraph}>Pratos do dia Por 20,99</Text>
        <Text style={styles.textHeader}>
          Inclua em seu Carrinho o Prato do dia
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          ...styles.scrollViewContent,
          paddingBottom: 70,
        }}>
        {ConteudoCard.reduce((acc, dish, index) => {
          if (index % 2 === 0) {
            acc.push(
              <View key={index} style={styles.row}>
                <Card style={styles.card} elevation={5}>
                  {/* Card 1 */}
                  <Pressable
                    style={styles.popUp}
                    onPress={() => toggleModal(dish.description)}>
                    <Text style={styles.text}>{`-${dish.day}-`}</Text>
                    <Text style={styles.textDescricao}>
                      {dish.day === 'Sábado' ? 'Feijoada' : dish.name}
                    </Text>
                    <Image
                      style={styles.image}
                      source={{ uri: dish.imageUrl }}
                      borderRadius={25}
                    />
                  </Pressable>
                   <TouchableOpacity
                        onPress={() => navigation.navigate('CarrinhoScreen1',{ item: dish })}
                        style={styles.iconButton}>
                        <MaterialIcons 
                        
                          name="shopping-cart"
                          size={25}
                          
                          color={quantities[index + 1] > 0 ? 'blue' : 'black'}
                        />
                         <Text> Comprar </Text>
                      </TouchableOpacity>
                  <View style={styles.row}></View>
                </Card>

                {index + 1 < ConteudoCard.length && (
                  <Card style={styles.card} elevation={5}>
                    {/* Card 2 */}
                    <Pressable
                      style={styles.popUp}
                      onPress={() =>
                        toggleModal(ConteudoCard[index + 1].description)
                      }>
                      <Text style={styles.text}>{`-${
                        ConteudoCard[index + 1].day
                      }-`}</Text>
                      <Text style={styles.textDescricao}>
                        {ConteudoCard[index + 1].day === 'Sábado'
                          ? 'Feijoada'
                          : ConteudoCard[index + 1].name}
                      </Text>
                      <Image
                        style={styles.image}
                        source={{ uri: ConteudoCard[index + 1].imageUrl }}
                        borderRadius={25}
                      />
                    </Pressable>
                    <View style={styles.row}>
                    

                      <TouchableOpacity
                        onPress={() => navigation.navigate('CarrinhoScreen1',{ item: dish })}
                        style={styles.iconButton}>
                        <MaterialIcons 
                        
                          name="shopping-cart"
                          size={25}
                          
                          color={quantities[index + 1] > 0 ? 'blue' : 'black'}
                        />
                         <Text> Comprar </Text>
                      </TouchableOpacity>
                    </View>
                  </Card>
                )}
              </View>
            );
          }
          return acc;
        }, [])}
      </ScrollView>
      
      <Footer navigation={navigation} />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{selectedDishDescription}</Text>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    padding: 8,
  },
  quantityText: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 16,
  },
  buttonHeader: {
    marginTop: 10,
    marginRight: 320,
  },
  paragraph: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  card: {
    height: 300,
    width: 175,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 25,
    marginBottom: 50,
  },
  image: {
    width: 175,
    height: 175,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 5,
  },
  textDescricao: {
    fontSize: 20,
    textAlign: 'center',
  },
  textHeader: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 18,
    color: '#fff',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 25,
    marginTop: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 10,
    maxHeight: '40%',
  },
  modalText: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  iconButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TelaSemana;
