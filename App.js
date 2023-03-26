import { StatusBar } from 'expo-status-bar';
import { Text, View  } from 'react-native';
import {Container, Title, Botao, BotaoTexto} from './src/style.js'
 
export default function App() {
  return (
    <Container>
      <Title  size={10} color={'#ababab'} >Open up App.js to start working on your app!</Title>

      <Botao onPress={() => alert('aaaa')}>
        <BotaoTexto>aperte</BotaoTexto>
      </Botao>
    </Container>
  );
}

