
export type UUID = string & { __uuid: void };

const uuid_regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

export function is_uuid(uuid: string): uuid is UUID {
    return uuid_regex.test(uuid);
}

export interface v1_shared_message_ephemeral {
    url: string | null;
    text: string,
    tags: string[],
}

export interface v1_shared_message_real {
    roomid: RoomUUID;
    idx: number | null;
    text: string;
    img: string | null;
    url: string | null;
    height: number | null;
    width: number | null;
    userid: UserUUID | null;
    tags: string[];
    type: string | null;
    username: string;
}

export interface v1_shared_group_change {
    add?: string;
    remove?: string;
}

export interface v1_shared_room {
    id: RoomUUID;
    type: string;
    name: string;
    userlist: v1_shared_user[];
}

export interface v1_shared_user {
    id: UserUUID;
    currentRoom: string | null;
    livestate: boolean;
    livelabel: string;
    name: string;
    talking: boolean;
    suppress: boolean;
    status: boolean;
    avatar: string | undefined;
    hidden: boolean;
}

/* Key is group name, internal list is collection of permissions allowed to that group */
export interface v1_shared_groups_list {
    [key: string]: string[];
}

export type v1_shared_context_type = "user" | "room" | "voiceroom" | "textroom" | "message" | "livestream";

// Split types to generate TS warnings about wrong UUID type without runtime overhead
export type UserUUID = UUID;
export type RoomUUID = UUID;
export type ConnectionUUID = UUID;