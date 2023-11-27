import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CarrinhoScreen from './CarrinhoScreen';
import InicialScreen from './InicialScreen';
import TelaSemana from './TelaSemana';
import TelaItens from './TelaItens';
import TelaBusca from './TelaBusca';
import TelaPedidos from './TelaPedidos';
import TelaMenu from './TelaMenu';
import TelaHistorico from './TelaHistorico';
import TelaEndereco from './TelaEndereco';
import TelaAjuda from './TelaAjuda';
import TelaDev from './TelaDev';
import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import CarrinhoScreen1 from './CarrinhoScreen1';
import TelaFinalizarCompra from './TelaFinalizarCompra';
import TelaPagamento from './TelaPagamento';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="InitialScreen" screenOptions={{
    headerShown: false,
  }}>
        <Stack.Screen name="InicialScreen" component={InicialScreen} />
        <Stack.Screen name="TelaSemana" component={TelaSemana} />
        <Stack.Screen name="CarrinhoScreen1" component={CarrinhoScreen1} />
        <Stack.Screen name="CarrinhoScreen" component={CarrinhoScreen} />
        <Stack.Screen name="TelaItens" component={TelaItens} />
        <Stack.Screen name="TelaPedidos" component={TelaPedidos} />
        <Stack.Screen name="TelaMenu" component={TelaMenu} />
        <Stack.Screen name="TelaBusca" component={TelaBusca} />
        <Stack.Screen name="TelaHistorico" component={TelaHistorico} />
        <Stack.Screen name="TelaEndereco" component={TelaEndereco} />
        <Stack.Screen name="TelaAjuda" component={TelaAjuda} />
        <Stack.Screen name="TelaDev" component={TelaDev} />
        <Stack.Screen name="TelaLogin" component={TelaLogin} />
        <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
        <Stack.Screen name="TelaPagamento" component={TelaPagamento} />
        <Stack.Screen name="TelaFinalizarCompra" component={TelaFinalizarCompra} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
