import { MaterialIcons } from "@expo/vector-icons";
import { Container, Content, Footer, Header, Info, Label, OrderStyleProps, Status, Title } from "./styles";
import { useTheme } from "styled-components/native";
import moment from "moment";

export type OrderProps = OrderStyleProps & {
    id: string;
    patrimony: string;
    equipment: string;
    description: string;
    created_at: number;
}

type Props = {
    data: OrderProps;
}

export function Order({ data }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container>
            <Status status={data.status} />

            <Content>
                <Header>
                    <Title>{data.description}</Title>
                    <MaterialIcons
                        name={data.status === "open" ? "hourglass-empty" : "check-circle"}
                        size={24}
                        color={data.status === "open" ? COLORS.SECONDARY : COLORS.PRIMARY}
                    />
                </Header>

                <Footer>
                    <Info>
                        <MaterialIcons name="schedule" size={16} color={COLORS.SUBTEXT} />
                        <Label>{data.created_at ?  moment.unix(data.created_at).format("DD/MM/YYYY") : null}</Label>
                    </Info>
                    <Info>
                        <MaterialIcons name="my-location" size={16} color={COLORS.SUBTEXT} />
                        <Label>{data.patrimony}</Label>
                    </Info>
                </Footer>
            </Content>
        </Container>
    );
}