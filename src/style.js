import  styled  from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;


export const Title = styled.Text`
  font-size: ${props => props.size}px;
  color: ${props => props.color || '#000'};  
`;

export const Botao = styled.TouchableOpacity`
  width: 200px;
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const BotaoTexto = styled.Text`
  color: #fff;
  font-size: 20px;
`;

