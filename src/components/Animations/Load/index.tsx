import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components/native";

export function Load() {
    const { COLORS } = useTheme();

    return (
        <ActivityIndicator
            color={COLORS.PRIMARY}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        />
    );
}