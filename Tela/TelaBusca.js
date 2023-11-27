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
  TouchableOpacity,
} from 'react-native';
import TelaItens from './TelaItens';
import Footer from './Footer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import de ícones da biblioteca FontAwesome
import Icon from 'react-native-vector-icons/FontAwesome';
const TelaBusca = ({ navigation }) => {
  const DATA = [
    {
      id: 1,
      category: 'Bebidas',
      thumbnail: {
        path: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0fHxkcmlua3N8ZW58MHx8fHwxNjk4ODk1ODYwfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
        extension: 'png',
      },
    },
    {
      id: 2,
      category: 'Marmitas',
      thumbnail: {
        path: 'https://plus.unsplash.com/premium_photo-1667389723440-dbbde959df52?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw2fHxMdW5jaGJveGVzfGVufDB8fHx8MTY5ODg5NjQ0NHww&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
        extension: 'png',
      },
    },
    {
      id: 3,
      category: 'Sobremesas',
      thumbnail: {
        path: 'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0N3x8RGVzc2VydHN8ZW58MHx8fHwxNjk4ODk2NTMxfDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
        extension: 'png',
      },
    },
  ];

  const Card = ({ item, event, link }) => (
    <Pressable onPress={event}>
      <View style={styles.card}>
        <Text style={styles.cardText}> {item.category} </Text>
        <Image
          style={styles.image}
          source={{
            uri: link,
          }}
          resizeMode="cover" // Modo de preenchimento da imagem no espaço que ela tem. No caso a View
        />
      </View>
    </Pressable>
  );

  const ShowCard = ({ item }) => (
    <Card
      item={item}
      link={item.thumbnail.path}
      event={() =>
        navigation.navigate('TelaItens', { category: item.category })
      }
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
          clearButtonMode="always"></TextInput>
      </View>

      <View style={styles.body}>
        <Text style={styles.bodyText}> Categorias </Text>
        <ScrollView>
          <FlatList
            style={styles.flatList}
            data={DATA}
            renderItem={ShowCard}
            keyExtractor={(item) => item.id}
            scrollEnabled={false} // Configurar scrollEnabled como false para travar o conteúdo
          />
        </ScrollView>
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
    flexDirection: 'row',
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
    paddingBottom: 5,
    fontSize: 18,
    paddingLeft: 10,
  },
  flatList: {
    flex: 1,
    margin: 10,
    padding: 23,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 90,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // Certifique-se de adicionar essa propriedade para garantir que a imagem seja cortada corretamente
  },
  cardText: {
    position: 'absolute',
    zIndex: 1,
    color: '#FFF',
    fontSize: 18,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default TelaBusca;
