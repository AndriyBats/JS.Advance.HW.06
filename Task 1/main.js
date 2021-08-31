function counter() {
    let count = 0;
    return function (number) {
        count += number;
        console.log(count);
    }   
}
let sum = counter();
sum(3);
sum(5);
sum(228);