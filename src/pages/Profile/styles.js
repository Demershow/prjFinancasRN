import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #000;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Nome = styled.Text`
    font-size: 28px;
    color: #fff;
    margin-top: 25px;
    text-align: center;
`;

export const NewLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;  
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const NewText = styled.Text`
    font-size: 18px;
    color: #fff;
`;

export const Logout = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #c62c36;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const LogoutText = styled.Text`
    font-size: 18px;
    color: #fff;
`;    