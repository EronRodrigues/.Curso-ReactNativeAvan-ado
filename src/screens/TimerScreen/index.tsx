import { Dimensions, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { colors } from "../../styles/colors";
import Button from "../../components/Button";
import { styles } from "./styles";

const screenWidth = Dimensions.get("screen").width;

export function TimerScreen() {
    return (
        <>
            <View style={styles.progressBarContainer}>
                <AnimatedCircularProgress
                    size={screenWidth * .8}
                    width={5}
                    fill={100}
                    tintColor={colors.buttonBlue}
                    backgroundColor={"#3D5875"}
                >
                    {
                        () => <Text style={styles.text}>00:00:00</Text>
                    }
                </AnimatedCircularProgress>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="||" onPress={() => {}}/>
                <Button text="▶" onPress={() => {}}/>
            </View>
        </>
    )
}