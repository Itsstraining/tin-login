export class item {
    private name: string;
    private price: number;
    private quantity: number;
    private img:String;

    constructor(name: string, price: number, quantity: number, img:String) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.img=img;

    }
    public getname(): string {
        return this.name;
    }

    public getprice(): number {
        return this.price;
    }
    public getquantity(): number{
        return this.quantity;
    }
    
    public getimg(): String {
        return this.img;
    }

    public setquantity(n:number){
        this.quantity = n;
        if(n<0){
            this.quantity=0;
        }
    } 
 

} 