import { View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { useTodo } from "../../context/TodoContext";

export function TodoForm() {
    const [description, setDescription] = useState("");
    const { addTodo } = useTodo();

    function handleAddTodo() {
        if (!description.trim()) {
            Alert.alert("Falha", "Descrição inválida!");
            return;
        }
        addTodo(description);
        setDescription("");
    }

    return (
        <View>
            <Button icon="plus" onPress={handleAddTodo}>Adicionar</Button>
            <TextInput mode="outlined" value={description} onChangeText={setDescription}/>
        </View>
    )
}