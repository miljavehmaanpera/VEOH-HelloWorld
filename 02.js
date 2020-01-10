const order_id = 1234; //kiinteä tieto, arvoa ei voi muuttaa toisaalla
const order_message = "My order";
let order_delivered = false; //muuttuva tieto

function summarize_order(id, message, delivered){
    //typeof(id); //voitaisin tutkia, mitä tyyppiä muuttuja on
    var summary="order id: " +  id + ", message: " +  message +
    ", delivered: " + delivered;
    return summary;
}

const order_summary=summarize_order(order_id, order_message, order_delivered);

console.log(order_summary);

order_delivered = true;
const order_summary2=summarize_order(order_id, order_message, order_delivered);
console.log(order_summary2);