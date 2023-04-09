import React, {useState} from 'react';
import { Platform, TouchableOpacity} from "react-native";
import {Container, Header} from './style';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function DatePicker({onChange, date, close}) {
  const [date, setDate] = useState(new Date(date)); 
 return (
   <Container>
    {Platform.OS === 'ios' && (
      <Header>
        <TouchableOpacity onPress={close}>
          <Text>
            Feachar
          </Text>
        </TouchableOpacity>
      </Header>
    )}
    <DateTimePickerAndroid
      date={date}
      mode="date"
      display="default"
      onChange={(e, d) => {
        const currentDate = d || date;
        setDate(currentDate);
        onChange(currentDate);
      }}
      style={{ backgroundColor: '#FFF'}}
      />

   </Container>
  );
}