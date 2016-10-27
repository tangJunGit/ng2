export interface Config{
    host: string;
    port: number;

    publish: string;
	subscribe: string;
    ws: string;
    
    headers?: Headers;
}

interface Headers{
    user?: string;
	pass?: string;
}


