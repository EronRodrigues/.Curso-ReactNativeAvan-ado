import styled from "styled-components";
import { TextInput, TextInputProps } from "react-native";

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
    placeHolderTextColor: theme.COLORS.SUBTEXT
}))`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 12px;
    font-size: 14px;
    padding: 7px 0 7px 20px;
    margin-bottom: 16px;
    font-family: ${({ theme }) => theme.FONTS.TEXT};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    color: ${({ theme }) => theme.COLORS.TEXT};
`;