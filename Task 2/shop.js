let remainderMoney = 1000;
let remainderBeer = 100;
let remainderWine = 50;
let remainderPepsi = 80;
let spendMoney = 0;

function sellBeer(count) {
    if(count <= remainderBeer){
        remainderBeer -= count;
        remainderMoney += count * 50;
        spendMoney += count * 50;
        return `Пиво: ${count} шт.`;
    }else{
        alert(`Вибачте, але на складі залишилось beer ${remainderBeer} шт.`)
    }  
}

function remBeer() {
    return `${remainderBeer} шт.`;
}

function sellWine(count) {
    if(count <= remainderWine){
        remainderWine -= count;
        remainderMoney += count * 50;
        spendMoney += count * 50;
        return `Вино: ${count} шт.`;
    }else{
        alert(`Вибачте, але на складі залишилось wine ${remainderWine} шт.`)
    }  
}

function remWine() {
    return `${remainderWine} шт.`;
}

function sellPepsi(count) {
    if(count <= remainderPepsi){
        remainderPepsi -= count;
        remainderMoney += count * 50;
        spendMoney += count * 50;
    return `Пепсі: ${count} шт.`;
    }else{
        alert(`Вибачте, але на складі залишилось pepsi ${remainderPepsi} шт.`)
    } 
}

function remPepsi() {
    return `${remainderPepsi} шт.`;
}

function getBalance() {
    return `${remainderMoney} грн`
}

function getSpendMoney() {
    return `Всього: ${spendMoney} гривень`;
}
function zeroingSpendMoney(){
    spendMoney = 0;
}
export {sellBeer, remBeer, sellWine, remWine, sellPepsi, remPepsi, getBalance, getSpendMoney, zeroingSpendMoney}