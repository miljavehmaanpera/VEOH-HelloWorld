function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}//keinotekoinen viivefunktio

class worker{
    constructor(n_food){
        this.n_food = n_food;
    }

    do_work = async (duration) => {
        if(this.n_food > 0){
            console.log("aloita työ");
            await sleep(duration);
            console.log("work done!");
            this.n_food--;
            console.log("n_food: " + this.n_food);
        }

        else{
            console.log("no food");
        }

        return; // palauttaa promise<void> = lupauksen tuloksesta
    }

}

let worker_obj=new worker(3);

worker_obj.do_work(2500).then(()=>{
    return worker_obj.do_work(1000);
}).then(()=>{
    return worker_obj.do_work(500);
}).then(()=>{
    return worker_obj.do_work(300);
}).then(()=>{
    return worker_obj.do_work(1000);
});

console.log("end of work");