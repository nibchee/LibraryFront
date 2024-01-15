class PaymentInfoRequest{
    amount: number;
    currency: string;
    recieptEmail: string | undefined;

    constructor(amount:number ,currency:string,recieptEmail: string | undefined){
         this.amount=amount;
         this.currency=currency;
         this.recieptEmail=recieptEmail;
    }
}

export default PaymentInfoRequest;