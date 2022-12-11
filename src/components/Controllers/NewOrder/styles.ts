import styled from "styled-components";
import { Dimensions } from "react-native";

export const Background = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: ${Dimensions.get("window").width}px;
    height: ${Dimensions.get("window").width}px;
    background-color: rgba(0, 0, 0, 0.7);
`;
