import { Greeting, Container, Title, SubTitle } from "./styles";
import { LogoutButton } from "../../Controllers/LogoutButton";
import auth from "@react-native-firebase/auth";

export function Header() {
    function handleLogout() {
        auth().signOut();
    }

    return (
        <Container>
            <Greeting>
                <Title>HelpDesk</Title>
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
            </Greeting>
            <LogoutButton onPress={handleLogout}/>
        </Container>
    )
}