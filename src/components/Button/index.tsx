import { Text, TouchableOpacity } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./styles";

type Props = {
    text: string;
    color?: "blue" | "grey" | "purple";
    size?: "small" | "normal";
    onPress: VoidFunction;}

export function Button(props: Props) {
    let backgroundColor = "";
    let size = { height: 92, width: 92 };

    if (props.size === "small") {
        size = { height: 46, width: 46 };
    }

    switch (props.color) {
        case "blue":
            backgroundColor = colors.buttonBlue;
            break;
        case "grey":
            backgroundColor = colors.buttonGrey;
            break;
        case "purple":
            backgroundColor = colors.buttonPurple;
            break;
        default:
            backgroundColor = colors.button;
    }

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.button, { backgroundColor, ...size }]}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
}