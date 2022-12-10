const stock =  {
    coffeBeans: 250,
    water: 1000
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeBeans >= 16 && stock.water >= 250) {
            resolve("Stock cukup bisa membaut kopi!");
        } else {
            reject("Stock tidak cukup");
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock()
.then(handleSuccess)
.catch(handleFailure);