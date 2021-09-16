const car = {
    name: 'BMW',
    color: 'Black',
    price: '50k',
    start: function () {
        return 'The Car is Start';
    },
    stop: function () {
        const result = this.start();
        return result + " 10 minute Later The car was Stop.";
    }
}

console.log(car.name);
console.log(car.start());
console.log(car.stop());

