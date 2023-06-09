import {useEffect, useState} from "react";
import {sendServerRequest} from "./ServerClient";

export interface ServerInfo {
    name: string;
    version: string;
    running_levels: string[];
}

export enum LevelStatus {
    RUNNING = "RUNNING",
    STOPPED = "STOPPED",
    LOADING = "LOADING",
}

export function useServerInfo(): ServerInfo | undefined {
    const [serverInfo, setServerInfo] = useState<ServerInfo>();
    useEffect(() => {
        resolveServerInfo()
            .then(setServerInfo)
            .catch(console.error);
    }, []);
    return serverInfo;
}

async function resolveServerInfo(): Promise<ServerInfo> {

    const rawResponse = await sendServerRequest("server");

    const response = {
        name: rawResponse.name,
        version: rawResponse.version,
        running_levels: rawResponse.levels
    }

    console.log("Server resolved: ", response);

    return response;
}

export async function requestServerShutdown(): Promise<boolean> {
    const response = await sendServerRequest("shutdown")

    console.log(response);
    return true
}

export async function forceServerShutdown(): Promise<boolean> {
    const response = await sendServerRequest("shutdown/force");

    console.log(response);
    return true
}