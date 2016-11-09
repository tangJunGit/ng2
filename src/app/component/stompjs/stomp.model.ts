export interface Config{
    host: string;
    port: number;

    publish: string;
	subscribe: string;
    ws: string;
    
    headers?: {
        user?: string;
    	pass?: string;
    };
}



