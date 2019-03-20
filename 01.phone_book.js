function phoneBook(array) {
    let phoneBook = {};

    for (let i = 0; i < array.length; i++) {
        let [name, number] = array[i].split(' ');
        phoneBook[name] = number;
    }

    for (let name in phoneBook) {
      console.log(`${name} -> ${phoneBook[name]}`);
    }

}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])