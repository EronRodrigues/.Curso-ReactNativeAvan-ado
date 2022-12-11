type LoginResponse = {
    token: string;
}

export class AuthAPI {
    static async login(username: string, password: string): Promise<LoginResponse> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username === "teste@gmail.com" && password === "123456") {
                    resolve({ token: "asdniadhu3ui412h3e21ujhdiasu12i3" })
                } else {
                    reject(new Error("O login foi inválido."))
                }
            }, 300)
        });
    }
}