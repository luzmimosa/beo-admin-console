
let host = "localhost";
let port = 8080;

export const sendServerRequest = async (path: string, returnRaw: boolean = false): Promise<any> => {
    try {
        const response = await fetch(`http://${host}:${port}/${path}`);

        // return body
        if (returnRaw) {
            return response;
        } else {
            return await response.json();
        }
    } catch (error) {
        return {};
    }
}