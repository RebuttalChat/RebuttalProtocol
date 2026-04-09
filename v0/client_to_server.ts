export interface v0_cts_signup {
    type: "signup",
    userName: string,
    password: string,
    signUp: string,
    email: string
}

export interface v0_cts_login {
    type: "login",
    password: string,
    protocol: string
}

export type v0_cts_packet = v0_cts_login & v0_cts_signup;