const products = [
    {
        title: "Nike",
        price: 300,
        type: "shoes"
    },
    {
        title: "Puma",
        price: 400,
        type: "shoes"
    },
    {
        title: "BMW",
        price: 7000,
        type: "car"
    },
    {
        title: "Chanel",
        price: 1200,
        type: "perfume"
    }
];

let sumCh = 0;
let sumNch = 0;
let sub = 0;
for( let i = 0; i < products.length; i++){
    const { price } = products[i];
    if (products[i].price % 2 === 0){
        sumCh = sumCh + products[i].price;
    }
    else {
        sumNch = sumNch + products[i].price;
    }
    console.log(sumCh);
    console.log(sumNch);
}
if(sumCh >= sumNch){
    sub = sumCh - sumNch;
}else{
    sub = sumNch - sumCh;
}
console.log(sub)

for(let i = 0; i < products.length; i++){
    const { title, type } = products[i];
    if (type == "shoes"){
        console.log(title);
    }
}

let array = [];
for(let i = 0; i < products.length; i++){
    const { title, price, type } = products[i];
    if(price < 1000){
        array.push(title, price, type);
    }
}
console.log(array)