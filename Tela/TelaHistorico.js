import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import Footer from './Footer.js';
import Icon from 'react-native-vector-icons/FontAwesome'; 


const Card = ({ title, description, navigation }) => {

  const { goBack } = useNavigation();

  const showInformation = (message) => {
    Alert.alert('Informações', message);
  };

  const handleCardPress = (message) => {
    showInformation(message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View
            style={{ width: '100%', height: 20, borderStartColor: 'white' }}
          />

          <ScrollView
            contentContainerStyle={{
              ...styles.scrollViewContent,
              paddingBottom: 70,
            }}>
            <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
        <Icon name="arrow-left" size={25} color="black"  />
      </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleCardPress(
                  'Pedido: Churrasco Misto\nPagamento: Cartão de Credito\nStatus: Finalizado\nID: 06'
                )
              }>
              <View style={styles.card}>
                <Image
                  source={require('./marmita2.jpg')}
                  style={styles.imagemCard}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titoloCard}>
                    {title} Churrasco Misto $46,99{' '}
                  </Text>
                  <Text style={styles.numeroPedidoCard}>
                    {description}Pedido concluído - N°06
                  </Text>
                  <Text style={styles.dataPedidoCard}>
                    {description}Qua. 18 Outubro 2023{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleCardPress(
                  'Pedido: Misto com Legumes\nPagamento: Dinheiro\nStatus: Finalizado\nID: 05'
                )
              }>
              <View style={styles.card}>
                <Image
                  source={require('./marmita1.jpg')}
                  style={styles.imagemCard}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titoloCard}>
                    {title} Misto com Legumes $26,99{' '}
                  </Text>
                  <Text style={styles.numeroPedidoCard}>
                    {description}Pedido concluído - N°05
                  </Text>
                  <Text style={styles.dataPedidoCard}>
                    {description}Ter. 17 Outubro 2023{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleCardPress(
                  'Pedido: Macarronada\nPagamento: Cartão de Debito\nStatus: Finalizado\nID: 04'
                )
              }>
              <View style={styles.card}>
                <Image
                  source={require('./marmita3.png')}
                  style={styles.imagemCard}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titoloCard}>
                    {title} Macarronada $24,99{' '}
                  </Text>
                  <Text style={styles.numeroPedidoCard}>
                    {description}Pedido concluído - N°04
                  </Text>
                  <Text style={styles.dataPedidoCard}>
                    {description}Seg. 16 Outubro 2023{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleCardPress(
                  'Pedido: Frango e Pure\nPagamento: Cartão de Credito\nStatus: Finalizado\nID: 03'
                )
              }>
              <View style={styles.card}>
                <Image
                  source={require('./marmita4.png')}
                  style={styles.imagemCard}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titoloCard}>
                    {title} Frango e Pure $25,99{' '}
                  </Text>
                  <Text style={styles.numeroPedidoCard}>
                    {description}Pedido concluído - N°03
                  </Text>
                  <Text style={styles.dataPedidoCard}>
                    {description}Sex. 13 Outubro 20233{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleCardPress(
                  'Pedido: Virada Paulista\nPagamento: Dinheiro\nStatus: Finalizado\nID: 02'
                )
              }>
              <View style={styles.card}>
                <Image
                  source={require('./marmita5.png')}
                  style={styles.imagemCard}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titoloCard}>
                    {title} Virada Paulista $27,99{' '}
                  </Text>
                  <Text style={styles.numeroPedidoCard}>
                    {description}Pedido concluído - N°02
                  </Text>
                  <Text style={styles.dataPedidoCard}>
                    {description}Qua. 11 Outubro 2023{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                handleCardPress(
                  'Pedido: Frango com Fritas\nPagamento: Cartão de Debito\nStatus: Finalizado\nID: 01'
                )
              }>
              <View style={styles.card}>
                <Image
                  source={require('./marmita6.png')}
                  style={styles.imagemCard}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.titoloCard}>
                    {title} Frango com Fritas $24,99{' '}
                  </Text>
                  <Text style={styles.numeroPedidoCard}>
                    {description}Pedido concluído - N°01
                  </Text>
                  <Text style={styles.dataPedidoCard}>
                    {description}Ter. 10 Outubro 2023{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    FooterContainer: {
      position: 'absolute',
      bottom: 0,
      width: '%',
    },
    flexDirection: 'row',
    backgroundColor: '#EA1D2C',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagemCard: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  titoloCard: {
    position: 'relative',
    top: -10,
    left: -5,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  numeroPedidoCard: {
    position: 'relative',
    top: -5,
    left: -3,
    fontSize: 16,
    color: 'white',
  },
  dataPedidoCard: {
    position: 'relative',
    top: -5,
    left: -3,
    fontSize: 16,
    color: '#d3d3d3',
  },
   backButton: {
     color:'black',
    position: 'absolute',
    top: 20, // Ajuste a posição vertical conforme necessário
    left: 20, // Ajuste a posição horizontal conforme necessário
    zIndex: 1, // Certifique-se de que o botão de voltar fique acima dos outros elementos
    // Estilos adicionais para o botão de voltar, como ícone ou texto
  },
});

export default Card;
