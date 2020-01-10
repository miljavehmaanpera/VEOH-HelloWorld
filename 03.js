let order={
    id: 1234,
    message: "my order",
    delivered: false,
}


function summarize_order(id, message, delivered){
    //typeof(id); //voitaisin tutkia, mitä tyyppiä muuttuja on
    var summary="order id: " +  id + ", message: " +  message +
    ", delivered: " + delivered;
    return summary;
}

const order_summary=summarize_order(order.id, order.message, order.delivered);

console.log(order_summary);

order.delivered = true;
const order_summary2=summarize_order(order.id, order.message, order.delivered);
console.log(order_summary2);