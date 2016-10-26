export interface Config{
    host: string;
    port: number;

    publish: string;
	subscribe: string;
    
    ssl?: boolean;
    ws?: string;

    headers?: Headers;
}

interface Headers{
    user?: string;
	pass?: string;
}


