import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';

const TelaDev = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Créditos</Text>

      <Text style={styles.sectionTitle}>Desenvolvedores</Text>
      <View style={styles.devItem}>
        <Text style={styles.devName}>Alexsandro Lopes Sipelli</Text>
        <Text style={styles.devRole}>Desenvolvedor Front-end</Text>
      </View>
      <View style={styles.devItem}>
        <Text style={styles.devName}>Danilo Ribeiro Cueto</Text>
        <Text style={styles.devRole}>Desenvolvedora Back-end</Text>
      </View>
      <View style={styles.devItem}>
        <Text style={styles.devName}>Gustavo Xavier</Text>
        <Text style={styles.devRole}>Desenvolvedor Front-end</Text>
      </View>
      <View style={styles.devItem}>
        <Text style={styles.devName}>Hiago Pereida Dos Anjos</Text>
        <Text style={styles.devRole}>Desenvolvedor Front-end</Text>
      </View>
      <View style={styles.devItem}>
        <Text style={styles.devName}>Lucas Boni Dos Santos</Text>
        <Text style={styles.devRole}>Desenvolvedor Front-end</Text>
      </View>
      <View style={styles.devItem}>
        <Text style={styles.devName}>Pablo Henrique Molina Nogueira Silva</Text>
        <Text style={styles.devRole}>Desenvolvedor Front-end</Text>
      </View>

      <Text style={styles.sectionTitle}>Agradecimentos</Text>
      <Text style={styles.creditsText}>
        Agradecemos a todos os colaboradores e parceiros que contribuíram para
        este projeto.
      </Text>

      <Footer navigation={navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  devItem: {
    marginBottom: 16,
  },
  devName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  devRole: {
    fontSize: 16,
  },
  creditsText: {
    fontSize: 16,
  },
});

export default TelaDev;
