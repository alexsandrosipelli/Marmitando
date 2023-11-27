import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = ({ navigation }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('InicialScreen')}>
        <Icon name="home" size={30} color="rgba(255, 255, 255, 0.9)" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('TelaBusca')}>
        <Icon name="search" size={30} color="rgba(255, 255, 255, 0.9)" />
        <Text style={styles.footerText}>Buscar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate('TelaHistorico')}>
        <Icon name="file-text-o" size={30} color="rgba(255, 255, 255, 0.9)" />
        <Text style={styles.footerText}>Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => setMenuVisible(true)}>
        <Icon name="bars" size={30} color="rgba(255, 255, 255, 0.9)"></Icon>
        <Text style={styles.footerText}>Menu</Text>
      </TouchableOpacity>

      <Modal visible={isMenuVisible} animationType="slide" transparent={true}>
        <View style={styles.menu}>
         

          
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('TelaAjuda');
            }}>
            <Icon name="help" size={24} color="black" style={styles.icon} />
            <Text style={styles.menuItemText}>Ajuda</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('TelaDev');
            }}>
            <Icon name="handshake-o" size={24} color="black" style={styles.icon} />
            <Text style={styles.menuItemText}>  Desenvolvedores</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setMenuVisible(false)}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#EA1D2C',
    flex: 1,
    paddingLeft: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: 10,
  },
  footerButton: {
    flex: 1,
    paddingTop: 3,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
    paddingBottom: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  menuItemText: {
    fontSize: 18,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
});

export default Footer;
