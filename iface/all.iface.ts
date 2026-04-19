import { type v0_cts_packet } from "./v0/client_to_server.iface.ts";
import { type v0_stc_packet } from "./v0/server_to_client.iface.ts";

import { type v1_cts_packet } from "./v1/client_to_server.iface.ts";
import { type v1_stc_packet } from "./v1/server_to_client.iface.ts";

export type any_stc_packet = v0_stc_packet | v1_stc_packet;
export type any_cts_packet = v0_cts_packet | v1_cts_packet;
