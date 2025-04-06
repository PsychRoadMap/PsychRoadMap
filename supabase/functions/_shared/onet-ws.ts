import { encodeBase64 } from "jsr:@std/encoding/base64";

const ONET_WS_URL = 'https://services.onetcenter.org/v1.9/ws';

export class ONetWS {
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
            if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
            return response.json();
        })
    }

    db_get(db_name: string, ...filters: string[]) {
        let query = "database/rows/" + db_name;
        filters.forEach((element, idx) => {
            query += (idx == 0) ? "?" : "&"; 
            query += element;             
        });

        return this.ws_get(query);
    }
}

export type ONetCareer = {
        onetsoc_code: string,
        title: string,
        element_id: string,
        element_name: string,
        scale_id: string,
        scale_name: string,
        data_value: number,
        n: number,
        standard_error: number,
        lower_ci_bound: number,
        upper_ci_bound: number,
        recommend_suppress: string,
        not_relevant: string,
        date_updated: string,
        domain_source: string
};