import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "نام کاربری",
                    type: "text",
                    placeholder: "نام کاربری",
                },
                password: {
                    label: "کلمه عبور",
                    type: "password",
                    placeholder: "کلمه عبور",
                },
            },
            async authorize(credentials) {
                // const res = await fetch("/your/endpoint", {
                //     method: "POST",
                //     body: JSON.stringify(credentials),
                //     headers: { "Content-Type": "application/json" },
                // });
                // const user = await res.json();

                const user = {
                    id: "11",
                    name: "پیمان نادری",
                    username: "payman",
                    password: "2750217",
                };

                if (
                    credentials?.username === user.username &&
                    credentials?.password === user.password
                ) {
                    return user;
                } else {
                    return null;
                }
            },
        }),

    ],
    signIn: "/login",
    signOut: "/signout",
};
