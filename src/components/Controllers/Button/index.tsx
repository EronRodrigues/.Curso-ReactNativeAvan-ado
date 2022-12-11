import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonStyleProps, Container, Load, Title } from "./styles";

type Props = RectButtonProps & ButtonStyleProps & {
    title: string;
    isLoading?: boolean;
}

export function Button({ disabled, title, isLoading = false, onPress, ...rest }: Props) {
    return (
        <Container disabled={disabled} enabled = {!isLoading} onPress={onPress} { ...rest }>
            {isLoading ? <Load/> : <Title>{title}</Title>}
        </Container>
    )
}