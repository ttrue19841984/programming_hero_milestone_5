document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFieldElement = getInputFieldValue('withdraw-field');
    const withdrawTotalAmount = getElementId('withdraw-total');
    const newWithdrawAmount = withdrawFieldElement + withdrawTotalAmount;
    setTextElement('withdraw-total', newWithdrawAmount)
    const restBalanceAmount = getElementId('balance-total');
    const restTotalBalance = restBalanceAmount - withdrawFieldElement;
    setTextElement('balance-total', restTotalBalance);
})