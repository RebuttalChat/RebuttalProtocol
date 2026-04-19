import { createCheckers } from "ts-interface-checker";

import types_v0_shared from './iface/v0/shared.iface-ti.ts';
import v0_stc_iface from './iface/v0/server_to_client.iface-ti.ts';
import v0_cts_iface from './iface/v0/client_to_server.iface-ti.ts';
import types_v1_shared from './iface/v1/shared.iface-ti.ts';
import v1_stc_iface from './iface/v1/server_to_client.iface-ti.ts';
import v1_cts_iface from './iface/v1/client_to_server.iface-ti.ts';
import any_iface from './iface/all.iface-ti.ts';


export const checker = createCheckers(
    types_v0_shared,
    types_v1_shared,
    v1_cts_iface,
    v0_cts_iface,
    v1_stc_iface,
    v0_stc_iface,
    any_iface,
);