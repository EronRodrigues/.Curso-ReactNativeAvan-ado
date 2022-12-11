import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type ButtonStyleProps = {
    disabled?: boolean;
}

export const Container = styled(RectButton).attrs<ButtonStyleProps>(({ disabled }) => ({
    opacity: disabled ? 0.7 : 1
}))`
    width: 100%;
    height: 56px;
    border-radius: 12px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const Title = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.TEXT};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.COLORS.WHITE
}))``;