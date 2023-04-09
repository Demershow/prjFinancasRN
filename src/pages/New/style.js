import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.20)'
})`

  background-color: rgba(255, 255, 255, 0.9);
  width: 90%;
  height: 50px; 
  margin-top: 30px;
  font-size: 17px;
`;

export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 90%;
  height: 50px;
  margin-top: 20px;
`;

export const SubmitText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 21px;
`;
