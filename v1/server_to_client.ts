import {
    type RoomUUID,
    type UserUUID,
    type v1_shared_groups_list,
    type v1_shared_message_real,
    type v1_shared_room,
    type v1_shared_user
} from "./shared.ts";

export interface v1_stc_login {
    type: "login",
    userid: UserUUID,
    success: boolean,
}

export interface v1_stc_update_users {
    type: "updateUsers",
    userList: v1_shared_user[],
}

export interface v1_stc_update_rooms {
    type: "updateRooms",
    roomList: v1_shared_room[],
}

export interface v1_stc_chatdev {
    type: "chatdev",
    userid: UserUUID,
    video: boolean,
    audio: boolean,
}

export interface v1_stc_join_room {
    type: "joinRoom",
    userid: UserUUID,
    roomid: RoomUUID,
}

export interface v1_stc_update_text {
    type: "updateText",
    roomid: RoomUUID,
    segment: number,
    messages: v1_shared_message_real[],
}

export interface v1_stc_leave_room {
    type: "leaveRoom",
    userid: UserUUID,
    roomid: RoomUUID,
}

export interface v1_stc_video {
    type: "video",
    payload: string,
    touserid: UserUUID,
    fromuserid: UserUUID,
}

export interface v1_stc_update_perms {
    type: "updatePerms"
    perms: string[],
}

export interface v1_stc_update_groups {
    type: "updateGroups",
    groups: v1_shared_groups_list,
}

export interface v1_stc_invite {
    type: "invite",
    invite_code: string
}

export interface v1_stc_send_message {
    type: "sendMessage",
    roomid: RoomUUID,
    message: v1_shared_message_real,
}

export interface v1_stc_server_mute {
    type: "servermute",
    userid: UserUUID,
    message: boolean,
}

export interface v1_stc_talking {
    userid: UserUUID,
    type: "talking",
    talking: boolean,
}
export interface v1_stc_go_live {
    type: "golive",
    livestate: boolean,
    livelabel: string,
    userid: UserUUID,
    roomid: RoomUUID,
}
export interface v1_stc_let_me_see {
    type: "letmesee",
    touserid: UserUUID,
    fromuserid: UserUUID,
    message: unknown,
}
export interface v1_stc_present_custom_window {
    type: "presentcustomwindow",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window: any,
}
export interface v1_stc_disconnect {
    type: "disconnect",
    userid: UserUUID,
}
export type v1_stc_packet =
    v1_stc_login |
    v1_stc_update_rooms |
    v1_stc_update_users |
    v1_stc_chatdev |
    v1_stc_join_room |
    v1_stc_update_text |
    v1_stc_leave_room |
    v1_stc_video |
    v1_stc_update_perms |
    v1_stc_update_groups |
    v1_stc_invite |
    v1_stc_send_message |
    v1_stc_server_mute |
    v1_stc_talking |
    v1_stc_go_live |
    v1_stc_let_me_see |
    v1_stc_present_custom_window |
    v1_stc_disconnect;

