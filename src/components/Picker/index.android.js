import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { PickerView } from './style';


export default function Picker({onChange, tipo}) {
 return (
    <PickerView>
      <RNPickerSelect 
        style={{
          inputIOS: {
            height: 50,
            padding: 5,
            fontSize: 16,
            backgroundColor: '#fff',
          }}}
          placeholder={{
            label: 'Selecione o tipo de transação',
            value: null,
            color: "#222"
          }}
          value={tipo}
          onValueChange={(value) => onChange(value)}
          items={[
            { label: 'Despesa', value: 'despesa', color: '#222' },
            { label: 'Receita', value: 'receita', color: '#222' },
          ]}
      />
    </PickerView>
  );
}