
let total = 0;
let itemsCount = 0;
function handleClick(target){
    const itemName = target.parentNode.parentNode.childNodes[1].innerText
const li = document.createElement('li');
li.innerText = itemName;


const selectedItemContainer = document.getElementById('selected-items');
selectedItemContainer.appendChild(li)
const priceItem = target.parentNode.parentNode.childNodes[5].innerText.split(' ')[1];
 total = parseInt(total) + parseInt(priceItem);
document.getElementById('total-price').innerText= total;
discount = 0.3 * total;
document.getElementById('discount-price').innerText = discount;
grandTotal = total + discount;
document.getElementById('ground-total').innerText = grandTotal;
itemsCount++;
console.log(itemsCount);
}