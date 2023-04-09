import React, {useState, useEffect, useContext} from 'react';
import { Alert } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import firebase from '../../services/firebase';

import Header from '../../components/Header';
import HistoricoList from '../../components/historicoList';

import { Container, Background, Nome, Saldo, Title, List } from './styles.js';
import { format, isBefore } from 'date-fns';

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

      await firebase.database().ref('historico').child(uid).orderByChild('date').equalTo(format(new Date, 'dd/MM/yyyy')).limitToLast(10).on('value', (snapshot) => {
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

  function handleDelete(data) {

    const [diaItem, mesItem, anoItem] = data.date.split('/');
    const dateItem = new Date(`${anoItem}/${mesItem}/${diaItem}`);

    const formatDiaHoje = format(new Date, 'dd/MM/yyyy');
    const [diaHoje, meshoje, anoHoje] = formatDiaHoje.split('/');
    const dateHoje = new Date(`${anoHoje}/${meshoje}/${diaHoje}`);

    if (isBefore(dateItem, dateHoje)) {
      alert('Você não pode excluir um registro antigo');
      return;
   }
    Alert.alert(  
      'Cuidado Atenção',
      `Você deseja excluir ${data.tipo} - Valor: ${data.valor}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Continuar',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )


  }

  async function handleDeleteSuccess(data) {
    await firebase.database().ref('historico').child(uid).child(data.key).remove()
      .then(async () => {
        let saldoAtual = saldo;
        data.tipo === 'despesa' ? saldoAtual += parseFloat(data.valor) : saldoAtual -= parseFloat(data.valor);
        await firebase.database().ref('users').child(uid).child('saldo').set(saldoAtual);
      })
      .catch((error) => {
        console.log(error);
      })
  }
   
  
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
        renderItem={({ item }) => (<HistoricoList data={item} deleteItem={handleDelete}/>)}
      />

   </Background>
  );
 }
