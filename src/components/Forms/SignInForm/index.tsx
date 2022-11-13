import { Form, Title, Footer } from "./styles";
import { Input } from "../../Controllers/Input";
import { Button } from "../../Controllers/Button";
import { useState } from "react";
import { FooterButton } from "../../Controllers/FooterButton";
import { useNavigation } from "@react-navigation/native";

export function SignInForm () {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();
    
    function handleSignIn() {

    }

    function handleForgotPassword() {

    }

    return (
        <Form>
            {/* @ts-ignore */}
            <Title>Entrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail}/>
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>
            <Button title="Entrar"/>
            <Footer>
                <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate("register")}/>
                <FooterButton title="Esqueci a senha" icon="email" onPress={handleForgotPassword}/>
            </Footer>
        </Form>
    )
}