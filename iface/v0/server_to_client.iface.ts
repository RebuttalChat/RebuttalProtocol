
export interface v0_stc_connect_packet {
    type: "connect",
    message: string,
    icon: string,
    protocols: string[],
}

export interface v0_stc_error {
    type: "error",
    message: string
}

export interface v0_stc_refresh_now {
    type: "refreshNow"
}

export type v0_stc_packet = v0_stc_connect_packet | v0_stc_error | v0_stc_refresh_now;
