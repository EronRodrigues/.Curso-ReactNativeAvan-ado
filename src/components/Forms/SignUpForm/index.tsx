import { useState } from "react";
import { Form, Title } from "./styles";
import { Input } from "../../Controllers/Input";
import { Button } from "../../Controllers/Button";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

export function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSignUp() {
        setIsLoading(true);
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => Alert.alert("Sucesso", "Usuário criado com sucesso!"))
            .catch(() => Alert.alert("Falha", "Não foi possível criar o usuário!"))
            .finally(() => setIsLoading(false))
    }

    return (
        <Form>
            <Title>Cadastrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail}/>
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>
            <Button title="Cadastrar" isLoading={isLoading} onPress={handleSignUp}/>
        </Form>
    );
}