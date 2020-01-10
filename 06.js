function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}//keinotekoinen viivefunktio

class order {
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
        const summary="order id: " +  this.id + ", message: " +  this.message +
        ", delivered: " + this.delivered;
        console.log("end summarize");
        return summary;
    }

}


let order_obj = new order(1237, "toinen tilaus");

console.log("AAA");

// (parametri1, param2,, ...)=>{koodi}
order_obj.summarize().then((summary)=>{
    console.log(summary);
});//then --> eli saa arvon sitten kun ohjelma on saanut laskettua async -osan

console.log("BBB");


