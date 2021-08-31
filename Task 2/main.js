import * as shop from './shop.js';
let FORM = document.forms.FORM;

function render(){
    FORM.money.value = shop.getBalance();
    FORM.beer.value = shop.remBeer();
    FORM.wine.value = shop.remWine();
    FORM.pepsi.value = shop.remPepsi();
    FORM.number.value = '';
}
render();

FORM.add.addEventListener('click', function(){
    const count = FORM.number.value;
    if(count){
        if(FORM.drink.value == 'beer'){
            let result = shop.sellBeer(count);
            if(result){
                document.querySelector('.textarea').innerHTML += `${result}<br>`;
            }
        }else if(FORM.drink.value == 'wine'){
            let result = shop.sellWine(count);
            if(result){
                document.querySelector('.textarea').innerHTML += `${result}<br>`;
            }
        }else if(FORM.drink.value == 'pepsi'){
            let result = shop.sellPepsi(count);
            if(result){
                document.querySelector('.textarea').innerHTML += `${result}<br>`;
            }
        }
    }
})

FORM.buy.addEventListener('click', function(){
    if(document.querySelector('.textarea').textContent){
        document.querySelector('.block-result').innerHTML = `${document.querySelector('.textarea').innerHTML} ${shop.getSpendMoney()}`;
        document.querySelector('.textarea').textContent = '';
        render();
        shop.zeroingSpendMoney()
    }
})