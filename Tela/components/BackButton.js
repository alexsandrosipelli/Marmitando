import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Ou a biblioteca de ícones que estiver usando

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Icon name="arrow-left" size={25} color="black"/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
backButton: {
    position: 'absolute',
    top: -290,
    left: -35,
    zIndex: 1,
  },
});

export default BackButton;