import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Footer from './Footer';

const TelaAjuda = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Página de Ajuda</Text>

      <View style={styles.faqItem}></View>
      <View style={styles.faqItem}>
        <Text style={styles.faqQuestion}>
          Como posso entrar em contato com o suporte?
        </Text>
        <Text style={styles.faqAnswer}>
          Para entrar em contato com o suporte, envie um e-mail para
          supportmarmitando@hotmail.com ou ligue para (11) 99845-4455.
        </Text>
      </View>

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
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  faqAnswer: {
    fontSize: 16,
  },
  guideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  guideDescription: {
    fontSize: 16,
  },
});

export default TelaAjuda;
