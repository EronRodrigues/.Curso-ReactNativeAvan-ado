import { KeyboardAvoidingView, Platform } from "react-native";
import { Lottie } from "../../components/Animations/Lottie";
import { BackButton, BackText, Container, SubTitle } from "./styles";
import registerAnimation from "../../assets/animations/register.json";
import { SignUpForm } from "../../components/Forms/SignUpForm";
import { useTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthRoutes";
import { useNavigation } from "@react-navigation/native";

export function Register() {
    const theme = useTheme();

    type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "Register">;

    const navigation = useNavigation<RegisterScreenNavigationProp>();

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Lottie source={registerAnimation}/>
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle> 
                <SignUpForm/>

                <BackButton onPress={() => navigation.push("SignIn")}>
                    <MaterialIcons name="arrow-back" size={24} color={theme.COLORS.PRIMARY}/>
                    <BackText>Eu já tenho uma conta.</BackText>
                </BackButton>
            </KeyboardAvoidingView>
        </Container>
    );
}