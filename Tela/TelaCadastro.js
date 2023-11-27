import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,Image,
} from 'react-native';

const TelaCadastro = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = () => {
    if (!username || !email || !password || !birthdate || !address) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha todos os campos.');
      return;
    }

    const today = new Date();
    const birthDate = new Date(
      parseInt(birthdate.substr(6, 4)),
      parseInt(birthdate.substr(3, 2)) - 1,
      parseInt(birthdate.substr(0, 2))
    );
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      Alert.alert('Menor de Idade', 'Você deve ser maior de 18 anos para se cadastrar.');
      return;
    }

    // Placeholder: apenas um console.log para mostrar o registro
    console.log('Usuário:', username);
    console.log('Email:', email);
    console.log('Senha:', password);
    console.log('Data de Nascimento:', birthdate);
    console.log('Endereço:', address);

    // Após validações, navegar para a tela de login
    navigation.navigate('TelaLogin');
  };

  const handleDateChange = (text) => {
    const numbers = text.replace(/\D/g, '');
    let formattedDate = '';
    if (numbers.length > 0) {
      formattedDate = numbers.match(/\d{1,2}/g).join('/');
    }
    setBirthdate(formattedDate);
  };

  return (

    <View style={styles.container}>

    
    <View style={styles.L}>   
     <Text style={styles.title}>  Bem vindo ao Marmintando </Text>
    <Image
              source={require('./Logo.jpg')}
              style={styles.imagemCard}
            />
    
    </View>
      <Text style={styles.title}>Crie uma Conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (dd/mm/yyyy)"
        onChangeText={handleDateChange}
        value={birthdate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        onChangeText={(text) => setAddress(text)}
        value={address}
      />
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  registerText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
   imagemCard: {
    
    width: 200,
    height: 200,
    borderRadius: 10,
  },
   L: {
  
    alignItems:'center',
  },

});

export default TelaCadastro;
