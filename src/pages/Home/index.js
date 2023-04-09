import React, {useState, useEffect, useContext} from 'react';

import { AuthContext } from '../../contexts/auth';

import firebase from '../../services/firebase';

import Header from '../../components/Header';
import HistoricoList from '../../components/historicoList';

import { Container, Background, Nome, Saldo, Title, List } from './styles.js';
import { format } from 'date-fns';

export default function Home() {
  const [saldo, setSaldo] = useState(0);
  const [historico, setHistorico] = useState([]);

  const { user } = useContext(AuthContext);
  const uid = user && user.uid

  useEffect(() => {
    async function loadList() {
      await firebase.database().ref('users').child(uid).on('value', (snapshot) => {
        setSaldo(snapshot.val().saldo);
      })

      await firebase.database().ref('historico').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yy')).limitToLast(10).on('value', (snapshot) => {
        setHistorico([]);
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            tipo: childItem.val().tipo,
            valor: childItem.val().valor,
            date: childItem.val().date,
          };
          setHistorico(oldArray => [...oldArray, list].reverse());
        })
      })
    }

    loadList();
  }, [])

  
 return (
   <Background>
      <Header />
      <Container>
        <Nome>Bem vindo, {user && user.name}</Nome>
        <Saldo>R$ {saldo.toFixed(2)}</Saldo>
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