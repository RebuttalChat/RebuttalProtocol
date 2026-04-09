
export type UUID = string & { __uuid: void };

const uuid_regex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

export function is_uuid(uuid: string): uuid is UUID {
    return uuid_regex.test(uuid);
}
