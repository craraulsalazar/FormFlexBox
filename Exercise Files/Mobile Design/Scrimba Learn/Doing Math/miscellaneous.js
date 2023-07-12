
//Ctrl+Shift + P == COMMAND PALETTE

function roll(min, max, floatFlag){
    let r = Math.random() * (max - min) + min;
    //console.log(floatFlag);
    return floatFlag? r: Math.floor(r);
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
//https://freesvg.org/the-sun

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

/*
Cool emojies for work

👨‍💻  //guy working in computer
🍩  //donut
🥙 //shawarma
🙈🙉🙊 //all monkeys
👽 //alien
🚽  //toilet
💩 //poop emojie
🧝‍♂️  //elf
🎅  //santa claus

💀  //SKULL
🤖 //ROBOT
👺 //GOBLING
👻 //GHOST
🕷️ //spider
👅 //tongue
🎃 // Jack o lantern
⚙️ //Gear
👨‍🏭 //man working
🧑🏻‍🏭 //working

👋  //waiving good bye
🖖  //vulcan salute
🤘  //signs of horns
🤙 //call me
👍  //thumps up
👌 //ok, victory
✌️ //victory
👏 //clapping
🙋‍♂️ Man raising hand Man raising hand
🤷 // person shrugging



*/