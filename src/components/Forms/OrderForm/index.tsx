import { Button } from "../../Controllers/Button";
import { Input } from "../../Controllers/Input";
import { Form, Title } from "./styles";
import { useState } from "react";
import { TextArea } from "../../Controllers/TextArea";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

export function OrderForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [patrimony, setPatrimony] = useState("");

    function handleNewOrder() {
        setIsLoading(true);
        firestore()
            .collection("Orders")
            .add({
                patrimony,
                description,
                status: "open",
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => Alert.alert("Sucesso", "Novo pedido adicionado com sucesso!"))
            .catch(() => Alert.alert("Falha", "Não foi possível adicionar o novo pedido!"))
            .finally(() => setIsLoading(false));
    }

    return (
        <Form>
            <Title>Novo chamado</Title>
            <Input placeholder="Número do Patrimônio" onChangeText={setPatrimony}/>
            <TextArea placeholder="Descrição" onChangeText={setDescription}/>
            <Button title="Enviar chamado" isLoading={isLoading} onPress={handleNewOrder}/>
        </Form>
    )
}