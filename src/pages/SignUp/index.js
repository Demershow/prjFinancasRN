import React, { useState, useContext } from "react";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/auth";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from "../SignIn/styles";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()
  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            autoCorrect={false}
            autoCapitalize="none"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            autoCorrect={false}
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrarr</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate("SignIn")}>
          <LinkText>Entrar em uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
