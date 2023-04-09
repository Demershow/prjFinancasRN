import React, {useState} from 'react';

import { AuthContext } from '../../contexts/auth';

import Header from '../../components/Header';
import HistoricoList from '../../components/historicoList';

import { Container, Background, Nome, Saldo, Title, List } from './styles.js';

export default function Home() {
  const [saldo, setSaldo] = useState(123.45);
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'despesa', valor: 10.00, data: new Date()},
    {key: '2', tipo: 'receita', valor: 15.00, data: new Date()},
    {key: '3', tipo: 'receita', valor: 1129.00, data: new Date()},
    {key: '4', tipo: 'despesa', valor: 159.00, data: new Date()},
    {key: '5', tipo: 'receita', valor: 199.00, data: new Date()},
    {key: '6', tipo: 'despesa', valor: 11.00, data: new Date()},
    {key: '7', tipo: 'despesa', valor: 10.00, data: new Date()},
    {key: '8', tipo: 'receita', valor: 160.00, data: new Date()},
    {key: '0', tipo: 'despesa', valor: 30.00, data: new Date()},
  ]);

  const { user } = useContext(AuthContext);
  
 return (
   <Background>
      <Header />
      <Container>
        <Nome>Bem vindo, {user && user.name}</Nome>
        <Saldo>123,45</Saldo>
      </Container>

      <Title>Ultimas movimentaçoes</Title>

      <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (<HistoricoList data={item} />)}
      />

   </Background>
  );
}