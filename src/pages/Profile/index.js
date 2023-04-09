import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';


import {Container, Nome, NewLink, NewText, Logout, LogoutText} from './styles';

export default function Profile() {
  const {user, signOut} = useContext(AuthContext);
  const navigation = useNavigation();
  return (
   <Container>
      <Nome>
        {user && user.nome}q
      </Nome>

      <NewLink onPress={() => navigation.navigate("Registrar")}>
        <NewText>
          Registrar Gasto
        </NewText>
      </NewLink>

      <Logout onPress={() => signOut()}>
        <LogoutText>
          Sair
        </LogoutText>
      </Logout>
   </Container>
  );
}