import { Container, Title } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
    title: string,
    icon: keyof typeof MaterialIcons.glyphMap;
}

export function FooterButton({ title, icon, ...rest }: Props ) {
    const theme = useTheme();
    return (
        <Container {...rest}>
            <MaterialIcons name={icon} size={24} color={theme.COLORS.TEXT}/>
            <Title>{title}</Title>
        </Container>
    )
}