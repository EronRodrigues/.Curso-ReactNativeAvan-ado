import { useTheme } from "styled-components/native"
import { Container } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButtonProps } from "react-native-gesture-handler";

export function LogoutButton({...rest}: RectButtonProps) {
    const { COLORS } = useTheme();

    return (
        <Container {...rest}>
            <MaterialIcons name="logout" size={18} color={COLORS.white}/>
        </Container>
    )
}