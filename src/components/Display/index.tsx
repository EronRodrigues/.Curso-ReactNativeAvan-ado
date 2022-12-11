import { Text, View } from "react-native";
import { useTimer } from "../../contexts/TimerContext";
import { styles } from "./styles";

export function Display() {
    const { timer, getHours, getMinutes, getSeconds } = useTimer();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {getHours()}<Text style={styles.subtext}>h</Text>
            </Text>
            <Text style={styles.text}>
                {getMinutes()}<Text style={styles.subtext}>m</Text>
            </Text>
            <Text style={styles.text}>
                {getSeconds()}<Text style={styles.subtext}>s</Text>
            </Text>
        </View>
    );
}