


document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDopositAmount = getInputFieldValue('deposit-field');
    // console.log(newDopositAmount)
    const newDepositTotal = getElementId('deposit-total');
    // console.log(newDepositTotal)
    const newDepositTotalAmount = newDopositAmount + newDepositTotal;
    // console.log(newDepositTotalAmount)
    setTextElement('deposit-total', newDepositTotalAmount);
    const balanceTotal = getElementId('balance-total')
    const newBalanceTotal = balanceTotal + newDopositAmount;
    setTextElement('balance-total', newBalanceTotal)

})

