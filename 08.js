function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}//keinotekoinen viivefunktio

class order {

    products = ["omena", "maito"];
    delivered = false;

    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    summarize = async ()=>{//async lupaa (promise), että toimittaa tuloksen. ohjelman eteneminen jatkuu, 
        //vaikka tässä kohdassa kestäisi kauan, kun tämä tulee valmiiksi, then-kohta saa täältä tuloksen
        console.log("start summarize");
        await sleep(2000);//keinotekoinen viive, demonstroidaan sitä, että tuloksen laskemisessa
        //tai saamisessa kestäisi kauan
        let summary="order id: " +  this.id + ", message: " +  this.message +
        ", delivered: " + this.delivered;

        summary += ", products: [";
        this.products.forEach((product, index)=>{
            summary += product + ", ";
        });
        summary += "]";

        console.log("end summarize");
        return summary;
    }

    deliver = async () =>{
        await sleep(1000);
        this.delivered=true;
        return;
    }
}


let order_obj = new order(1237, "toinen tilaus");

order_obj.deliver().then(()=>{
    console.log("delivered");
    return order_obj.summarize();
}).then((summary)=>{
    console.log(summary);
});







