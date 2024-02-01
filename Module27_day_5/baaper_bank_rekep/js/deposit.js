document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositeField = document.getElementById('deposit-field');
    const depositeFieldElementString = depositeField.value;
    const depositeFieldElement = parseFloat(depositeFieldElementString);
    
    // step-3
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;
    const depositTotalElement = parseFloat(depositTotalString);
    // step-4

    const newDepositeTotal = depositTotalElement + depositeFieldElement;
    depositTotal.innerText = newDepositeTotal;

    // step-5
    const balanceTotal= document.getElementById('balance-total');
    const balanecTotalString = balanceTotal.innerText;
    const balanceTotalElement = parseFloat(balanecTotalString);
    // step-6
    const newBalanceTotal = balanceTotalElement + newDepositeTotal;
    balanceTotal.innerText = newBalanceTotal;

    // step-7
    depositeField.value = '';
})