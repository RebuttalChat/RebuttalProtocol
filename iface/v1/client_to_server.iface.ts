import {
    type RoomUUID, type UserUUID,
    type v1_shared_context_type, type v1_shared_group_change,
    type v1_shared_message_ephemeral, type v1_shared_message_update
} from "./shared.iface.ts";

export interface v1_cts_invite {
    type: "invite",
    groupName: string
}

export interface v1_cts_get_messages {
    type: "getmessages",
    segment: number | null | undefined,
    roomid: RoomUUID
}

export interface v1_cts_message {
    type: "message",
    filename: string | null,
    rawfile: string | null,
    roomid: RoomUUID,
    message: v1_shared_message_ephemeral,
}

export interface v1_cts_join_room {
    type: "joinroom",
    roomid: RoomUUID
}

export interface v1_cts_leave_room {
    type: "leaveroom",
}

export interface v1_cts_video {
    type: "video",
    touserid: UserUUID,
    payload: unknown,
}

export interface v1_cts_go_live {
    type: "golive",
    livestate: boolean,
    livelabel: string,
}

export interface v1_cts_let_me_see {
    type: "letmesee",
    touserid: UserUUID,
    message: boolean,
}

export interface v1_cts_create_room {
    type: "createroom",
    roomType: "voice" | "text",
    roomName: string,
    position: number,
}

export interface v1_cts_create_user {
    type: "createuser",
    userName: string,
    groupName: string,
    email: string,
}

export interface v1_cts_update_room {
    type: "updateroom",
    roomid: RoomUUID,
    roomName: string,
}

export interface v1_cts_update_user {
    type: "updateuser",
    userid: UserUUID,
    userName: string,
}

export interface v1_cts_remove_room {
    type: "removeroom",
    roomid: RoomUUID,
}

export interface v1_cts_remove_user {
    type: "removeuser",
    withvengence: boolean,
    touserid: UserUUID
}

export interface v1_cts_update_message {
    type: "updatemessage",
    message: v1_shared_message_update,
}

export interface v1_cts_remove_message {
    type: "removemessage",
    roomid: RoomUUID,
    messageid: number,
}

export interface v1_cts_create_group {
    type: "creategroup",
    groupName: string,
}

export interface v1_cts_update_group {
    type: "updategroup",
    groupName: string,
    changes: v1_shared_group_change[],
}

export interface v1_cts_remove_group {
    type: "removegroup",
    groupName: string,
}

export interface v1_cts_set_user_group {
    type: "setusergroup",
    userid: UserUUID,
    groupName: string,
}

export interface v1_cts_chat_device {
    type: "chatdev",
    video: boolean,
    audio: boolean,
}

export interface v1_cts_server_mute {
    type: "servermute",
    userid: UserUUID,
    suppress: boolean,
}

export interface v1_cts_talking {
    type: "talking",
    talking: boolean,
}

export interface v1_cts_context_option {
    type: "contextoption",
    context: v1_shared_context_type,
    option: string,
    value: string,
}

export interface v1_cts_window_input {
    type: "windowinput",
    inputid: string,
    value: string,
    allinputs: string,
}

export type v1_cts_packet = v1_cts_invite | v1_cts_get_messages | v1_cts_message | v1_cts_join_room | v1_cts_leave_room | v1_cts_video | v1_cts_go_live | v1_cts_let_me_see | v1_cts_create_room | v1_cts_create_user | v1_cts_update_room | v1_cts_update_user | v1_cts_remove_room | v1_cts_remove_user | v1_cts_update_message | v1_cts_remove_message | v1_cts_create_group | v1_cts_update_group | v1_cts_remove_group | v1_cts_set_user_group | v1_cts_chat_device | v1_cts_server_mute | v1_cts_talking | v1_cts_context_option | v1_cts_window_input;
