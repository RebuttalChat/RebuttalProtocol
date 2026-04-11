export type UUID = string & { __uuid: void };

const uuid_regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

export function is_uuid(uuid: string): uuid is UUID {
    return uuid_regex.test(uuid);
}

export interface v0_cts_signup {
    type: "signup",
    userName: string,
    password: string,
    signUp: UUID,
    email: string
}

export interface v0_cts_login {
    type: "login",
    password: string,
    protocol: string,
    email: string,
}

export type v0_cts_packet = v0_cts_login | v0_cts_signup;
