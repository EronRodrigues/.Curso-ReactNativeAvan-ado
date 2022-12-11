import { Container, Counter, Header, Title } from "./styles";
import { useState } from "react";
import { FlatList } from "react-native";
import { Load } from "../../Animations/Load";
import { Order, OrderProps } from "../../Controllers/Order";
import { Filters } from "../../Controllers/Filters";
import { useEffect } from "react";
import firestore from "@react-native-firebase/firestore";

export function Orders() {
    const [status, setStatus] = useState<"open" | "closed">("open");
    const [orders, setOrders] = useState<OrderProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscriber = firestore()
            .collection("Orders")
            .onSnapshot(documentSnapshot => {
                const orders = documentSnapshot.docs.map(doc => {
                    if (doc.data()) {
                        return {
                            id: doc.id,
                            ...doc.data(),
                            created_at: doc.data()?.created_at?.seconds
                        }
                    }
                }) as OrderProps[];

                setOrders(orders);
                setIsLoading(false);
            });

        return () => subscriber();
    }, []);

    return (
        <Container>
            <Filters onFilter={setStatus} />

            <Header>
                <Title>Chamados {status === "open" ? "abertos" : "encerrados"}</Title>
                <Counter>{orders.length}</Counter>
            </Header>

            {
                isLoading ?
                    <Load /> :
                    <FlatList
                        data={orders}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Order data={item} />}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    />
            }
        </Container>
    );
}