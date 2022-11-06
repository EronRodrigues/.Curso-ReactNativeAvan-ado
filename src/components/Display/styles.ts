import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingTop: 40,
    },
    text: {
        fontSize: 72,
        marginHorizontal: 10,
        colors: colors.text,
    },
    subtext: {
        fontSize: 32,
    },
});