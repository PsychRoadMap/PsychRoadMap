import { encodeBase64 } from "jsr:@std/encoding/base64";

const ONET_WS_URL = 'https://services.onetcenter.org/ws';

export default class ONetWS {
    username: string;
    password: string;
    
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password; 
    }

    ws_get(path: string) {
        const url = `${ONET_WS_URL}/${path}`;

        const headers = new Headers();
        headers.append('Authorization', `Basic ${encodeBase64(`${this.username}:${this.password}`)}`);
        headers.append('Accept', 'application/json');

        return fetch(url, {
            method: 'GET',
            headers: headers,
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
    }

    db_get(db_name: string, ...filters: string[]) {
        let response = this.ws_get("database/rows/" + db_name);
        
    }
}