 function storage(array){
     // First way

//let storage = {};

//    for (let i = 0; i < array.length; i++) {
//        let [product, quantity] = array[i].split(' ');

//        if (storage.hasOwnProperty(product)) {
//            storage[product] += Number(quantity);
//         }
//         else {
//             storage[product] = Number(quantity);
//        }
//  }

//     for (let product in storage) {
//      console.log(`${product} -> ${storage[product]}`);

//     }

    // Secon way width Map

    let storage = new Map();

    for (let element of array) {
        let [product, quantityData] = element.split(' ');
        let quantity = Number(quantityData);

        if (storage.has(product)) {
            storage.set(product, storage.get(product) + quantity);
        }
        else {
            storage.set(product, quantity);
        }
    }
    for (let [key,values] of storage) {
     console.log(`${key} -> ${values}`);   
    }
 }

 storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])