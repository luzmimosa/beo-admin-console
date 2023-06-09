import {useEffect, useState} from "react";
import {sendServerRequest} from "./ServerClient";

export interface LevelInfo {
    name: string,
    max_players: number,
    state: number
}

let intervalStarted = false;

export function useLevelInfo(): Array<LevelInfo> | undefined {
    const [levelInfo, setLevelInfo] = useState<Array<LevelInfo>>();
    useEffect(() => {
        if (intervalStarted) return;

        intervalStarted = true;
        setInterval(() => {
            resolveLevelInfo()
                .then(setLevelInfo)
                .catch(console.error);
        }, 1000);
    }, []);
    return levelInfo;
}

async function resolveLevelInfo(): Promise<Array<LevelInfo>> {
    const rawResponse = await sendServerRequest("server/level");

    const response = rawResponse.map((level: any) => {
        return {
            name: level.name,
            max_players: level.max_players,
            state: level.state
        }
    })

    return response;
}

export async function startLevel(levelName: string): Promise<void> {
    await sendServerRequest(`server/level/${levelName}/start`);
}

export async function stopLevel(levelName: string): Promise<void> {
    await sendServerRequest(`server/level/${levelName}/stop`);
}

export async function reloadLevelsAndOrbs(): Promise<void> {
    await sendServerRequest(`reload`);
}