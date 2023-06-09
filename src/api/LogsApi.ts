import {useEffect, useState} from "react";
import {sendServerRequest} from "./ServerClient";

export interface LogFileInfo {
    name: string;
    size: number;
    last_modified: Date;
}

export async function resolveLogInfo(): Promise<Array<LogFileInfo>> {
    const response = await sendServerRequest("logs");

    console.log(response)

    const logInfo: Array<LogFileInfo> = [];

    try {
        for (let log of response) {
            logInfo.push({
                name: log.name,
                size: log.size,
                last_modified: new Date(log.date)
            })
        }

        return logInfo;
    } catch (error) {
        return logInfo;
    }
}

export function useLogInfo(): Array<LogFileInfo> | undefined {
    const [logInfo, setLogInfo] = useState<Array<LogFileInfo>>();
    useEffect(() => {
        resolveLogInfo()
            .then(setLogInfo)
            .catch(console.error);
    }, []);
    return logInfo;
}

export async function downloadLog(name: string): Promise<void> {
    const response = await sendServerRequest(`logs/${name}`, true);

    if (response.status !== 200) {
        return;
    }

    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    link.click();
}