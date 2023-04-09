import React, {useState} from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from '../../components/Header';
import {Background, Input, SubmitButton, SubmitText} from './style';
import { SafeAreaView } from 'react-native-safe-area-context';

import Picker from '../../components/Picker';

export default function New() {

  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState(null);	

 return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
   <Background>
      <Header />
       
      <SafeAreaView>
        <Input 
          placeholder="Valor desejado"
          keyboardType="numeric"
          returnKeyType="next"
          onSubmitEditing={() => Keyboard.dismiss()}
          value={valor}
          onChangeText={ (text) => setValor(text) }
        />

        <Picker onChange={setTipo} tipo={tipo} />

        <SubmitButton>
          <SubmitText>
            Registrar
          </SubmitText>
        </SubmitButton>
      </SafeAreaView>

    </Background>
  </TouchableWithoutFeedback>
  );
}