import LottieView, { AnimatedLottieViewProps } from "lottie-react-native";

export function Lottie({ ...rest }: AnimatedLottieViewProps) {
    return (
        <LottieView autoPlay loop autoSize resizeMode="cover" style = {{ width: 220, height: 220, alignSelf: "center", marginTop: 20 }} {...rest}/>
    );
}