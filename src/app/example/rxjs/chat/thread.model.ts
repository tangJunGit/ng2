export class Thread{
    id: string;
    name: string;
    avastarSrc: string;
    lastMassage: string;

    constructor(id: string, name: string, avastarSrc: string){
        //this.id = id || uuid();
        this.name = name;
        this.avastarSrc = avastarSrc;
    }
}