import {useEffect, useState} from "react";
import {sendServerRequest} from "./ServerClient";

export interface JvmInfo {
    maxMemory: number;
    usedMemory: number;
    rootSize: number;
    rootSizeLimit: number;
    jvmCoresUsed: number;
    systemCoresTotal: number;
    averageProcessorSpeed: number;
}

export function useJvmInfo(): JvmInfo | undefined {
    const [jvmInfo, setJvmInfo] = useState<JvmInfo>();
    useEffect(() => {
        setInterval(() => {
            resolveJvmInfo()
                .then(setJvmInfo)
                .catch(console.error);
        }, 1000);
    }, []);
    return jvmInfo;
}

async function resolveJvmInfo(): Promise<JvmInfo> {
    const rawResponse = await sendServerRequest("jvm");

    const response = {
        maxMemory: rawResponse.maxMemory,
        usedMemory: rawResponse.usedMemory,
        rootSize: rawResponse.rootSize,
        rootSizeLimit: rawResponse.rootSizeLimit,
        jvmCoresUsed: rawResponse.jvmCoresUsed,
        systemCoresTotal: rawResponse.systemCoresTotal,
        averageProcessorSpeed: rawResponse.averageProcessorSpeed
    }

    return response;
}

setInterval(() => {

});