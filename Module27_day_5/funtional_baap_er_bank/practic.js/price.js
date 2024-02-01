document.getElementById('btn-price').addEventListener('click', function(){
    const priceElement = document.getElementById('price-product');
    const priceElementValueString = priceElement.innerText;
    const priceElementValue = parseFloat(priceElementValueString);
    const pricePayElement = document.getElementById('price-pay');
    const setValue = priceElementValue * 0.3;
    pricePayElement.innerText = setValue;

})