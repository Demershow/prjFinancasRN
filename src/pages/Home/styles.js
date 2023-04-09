import styled from "styled-components/native";


export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Container = styled.View`
  margin-top: 25px;
  margin-left: 16px;
`;

export const Nome = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
`;

export const Saldo = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #00b94a;
  margin-left: 15px;
  margin-bottom: 10px;

`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15,
})`
  margin-top: 15px;
  background-color: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
`;

export const Area = styled.View`  
  flex-direction: row;
  align-items: baseline;
  margin-left: 16px;

`;

