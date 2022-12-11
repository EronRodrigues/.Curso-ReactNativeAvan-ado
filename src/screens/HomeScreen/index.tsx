import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Button, Text, TextInput } from "react-native-paper";
import { TodoItem } from "../../components/TodoItem";
import { useTodo } from "../../context/TodoContext";
import { TodoForm } from "../../components/TodoForm";
import { useAuth } from "../../context/AuthContext";

export function HomeScreen() {
    const { todos } = useTodo();
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <Text></Text>
            <Text style={styles.title}>Lista de Tarefas</Text>
            <Text></Text>
            <FlatList
                style={styles.lista}
                data={todos}
                renderItem={({ item }) => <TodoItem todo={item}/>}
                keyExtractor={(item) => item.id}
            />
            <TodoForm/>
            <Button color="red" icon={"logout-variant"} onPress={logout}>Sair</Button>
        </View>
    )
}