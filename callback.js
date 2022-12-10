const orderCoffee = callback => {
    let coffee = null;
    console.log("Sedang membuat coffee, Silahkan tunggu...");
    setTimeout(() => {
        coffee = "Kopi sudah tersajikan!";
        callback(coffee)
    }, 3000);
}

orderCoffee(coffee => {
    console.log(coffee);
})


