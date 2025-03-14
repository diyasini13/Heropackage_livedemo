export default class KeyGenerator {
    private static instance: KeyGenerator;
    private counter: number = 0;
    private constructor() {}
    public static getInstance(): KeyGenerator {
        if(!KeyGenerator.instance){
            KeyGenerator.instance = new KeyGenerator()
        }
        return KeyGenerator.instance;
    }
    public getNewKey() {
        this.counter += 1;
        return Math.random().toString().substring(5) + this.counter.toString();
    }
}

export function GetNewKey(){
    return KeyGenerator.getInstance().getNewKey();
}