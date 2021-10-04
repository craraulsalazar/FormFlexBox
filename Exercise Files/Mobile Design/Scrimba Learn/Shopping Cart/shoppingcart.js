
//Ctrl+Shift + P == COMMAND PALETTE

function roll(min, max, floatFlag){
    let r = Math.random() * (max - min) + min;
    //console.log(floatFlag);
    return floatFlag? r: Math.floor(r);
}

function taxed(value) {
    return taxRate / 100 * value + parseFloat(value);
}

//console.log(roll(1,5,1))
let userNames = ['James','Jane','Ryan','Rebecca']

let user = {
    name: userNames[roll(0,userNames.length)],
    age: roll(12,65),
    height: roll(5.1,6.1,1).toFixed(2)
}
//console.log(user);
//https://emojipedia.org/strawberry/

let possibleProducts = ['🥝','🍋','🥭','🍓','🍑','🍊','🍍','🍐','🍇','🍉','🍌','🍒','🍅','🥑','🍎','🍏'];

let products = [...Array(5)].map((_ , i) => {
    return {
        index: i,
        title: possibleProducts[roll(0,possibleProducts.length)],
        price: roll(1,10,1).toFixed(2),
        count: roll(1,6)
    }
})

//console.log(products);

let productsElements = document.getElementById("Products");


//Calculate the Cart Total using the High Order function .reduce

let cartTotal = products.reduce(function(accumulator, product){
    console.log(accumulator, product);
    return accumulator + parseFloat(product.price) * product.count;
}, 0
).toFixed(2);



let cartHtml = '';
products.forEach(function(product){

    cartHtml += `<div class="product">
        <div>${product.title}</div>
        <div>💲${product.price}</div>
        <div>x${product.count}</div>
    </div>`

})

productsElements.innerHTML = cartHtml;

let taxRate = roll(5,9,1).toFixed(2);
let taxedTotal = taxed(cartTotal).toFixed(2);


let summary = document.getElementById("Summary");
let summaryHtml = '';
summaryHtml += `<div>Total: 💲${cartTotal}</div>`
summaryHtml += `<div>Tax Rate: 💲${taxRate}%</div>`
summaryHtml += `<div>Taxed Total: 💲${taxedTotal}</div>`

summary.innerHTML = summaryHtml;