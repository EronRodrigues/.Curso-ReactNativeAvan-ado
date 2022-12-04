import { View } from "react-native";
import { Checkbox } from "../Checkbox";
import { IconButton, Text } from "react-native-paper";
import { styles } from "./styles";
import { useTodo } from "../../context/TodoContext";
import Animated, { Layout, LightSpeedInLeft, LightSpeedOutRight } from "react-native-reanimated";

export interface Todo {
    id: string;
    description: string;
    completed: boolean;
}

type Props = {
    todo: Todo;
}

export function TodoItem({ todo }: Props) {
    const { deleteTodo } = useTodo();

    return (
        <Animated.View 
        entering={LightSpeedInLeft}
        layout={Layout.springify()}
        exiting={LightSpeedOutRight}
        style={styles.container}
        >
            <Text style={styles.descriptionText}>{todo.description}</Text>
            <IconButton onPress={() => deleteTodo(todo.id)} size={32} style={{ backgroundColor: "red" }} icon={"delete"} color={"black"}/>
        </Animated.View>
    )
}