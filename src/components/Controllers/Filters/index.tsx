import { useTheme } from "styled-components/native";
import { Filter } from "../Filter";
import { Container, Options, Title } from "./styles";

type Props = {
    onFilter: (status: "open" | "closed") => void;
}

export function Filters({ onFilter }: Props) {
    const { COLORS } = useTheme();
    
    return (
        <Container>
            <Title>Filtre pelo status do chamado.</Title>
            <Options>
                <Filter 
                    title="Abertos"
                    backgroundColor={COLORS.SECONDARY}
                    onPress={() => onFilter("open")}
                />
                <Filter 
                    title="Encerrados"
                    backgroundColor={COLORS.PRIMARY}
                    onPress={() => onFilter("closed")}
                />
            </Options>
        </Container>
    );
}