
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

export interface v1_shared_message_update {
    roomid: RoomUUID,
    idx: number,
    text?: string,
    img?: string,
    url?: string,
    width?: number,
    height?: number,
    userid?: UserUUID,
    tags?: string[],
    type?: string,
    username?: string,
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
    currentRoom: RoomUUID | null;
    livestate: boolean;
    livelabel: string;
    name: string;
    talking: boolean;
    suppress: boolean;
    status: boolean;
    avatar: string | undefined;
    hidden: boolean;
}

export interface v1_shared_theme {
    name: string;
    description: string;
    id: string;
}

/* Key is group name, internal list is collection of permissions allowed to that group */
export interface v1_shared_groups_list {
    [key: string]: string[];
}

export type v1_shared_context_type = "user" | "room" | "voiceroom" | "textroom" | "message" | "livestream";

export type UserUUID = string;
export type RoomUUID = string;
export type ConnUUID = string;
