import { View } from "react-native";
import { useTimer } from "../../contexts/TimerContext";
import Button from "../Button";
import { styles } from "./styles";

export default function Keyboard() {
    const { timer, onKeyPress, onBackspacePress } = useTimer();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button text="1" onPress={() => onKeyPress("1")} />
                    <Button text="2" onPress={() => onKeyPress("2")} />
                    <Button text="3" onPress={() => onKeyPress("3")} />
                </View>
                <View style={styles.row}>
                    <Button text="4" onPress={() => onKeyPress("4")} />
                    <Button text="5" onPress={() => onKeyPress("5")} />
                    <Button text="6" onPress={() => onKeyPress("6")} />
                </View>
                <View style={styles.row}>
                    <Button text="7" onPress={() => onKeyPress("7")} />
                    <Button text="8" onPress={() => onKeyPress("8")} />
                    <Button text="9" onPress={() => onKeyPress("9")} />
                </View>
                <View style={styles.row}>
                    <Button text="00" onPress={() => onKeyPress("00")} />
                    <Button text="0" onPress={() => onKeyPress("0")} />
                    <Button text="⌫" color="grey" onPress={onBackspacePress} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {
                    !!timer.length && <Button text="▶" onPress={() => { }} color="blue" />
                }
            </View>
        </>
    )
}