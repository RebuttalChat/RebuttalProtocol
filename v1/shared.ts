import { UUID } from "../shared.ts";

export interface v1_shared_message {
    roomid: string;
    idx: number;
    text: string;
    img?: string;
    url?: string;
    height?: number;
    width?: number;
    userid?: string;
    tags: string[];
    type?: string;
    username: string;
}
export interface v1_shared_group_change {
    add?: string;
    remove?: string;
}


// Split types to generate TS warnings about wrong UUID type without runtime overhead
export type UserUUID = UUID;
export type RoomUUID = UUID;
export type ConnectionUUID = UUID;