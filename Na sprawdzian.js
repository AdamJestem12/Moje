var arr = new Array(10, 20, 30, 40, 50);
document.write(arr[2]);
document.write(arr.length);
for(let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
}

arr.push(60); // dołączanie elementu do tablicy powyżej
for(let i = 0; i < arr.length; i++) {
    document.write(arr[i]);
}

Array.prototype.showAll = function() {
    for(let i = 0; i < this.length; i++){
        document.write(this[i]);
    }
}
// tworzenie metod prototypowych na sprawdzianie