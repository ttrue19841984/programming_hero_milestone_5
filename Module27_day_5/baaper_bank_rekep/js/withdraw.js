document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-filed');
    const withdrawFieldString = withdrawField.value;
    const withdrawFieldElement = parseFloat(withdrawFieldString);
    withdrawField.value = '';

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const withdrawTotalElement = parseFloat(withdrawTotalString);
     const newTotalWithdraw = withdrawTotalElement + withdrawFieldElement;
     withdrawTotal.innerText = newTotalWithdraw;

     const balanceTotal= document.getElementById('balance-total');
     const balanecTotalString = balanceTotal.innerText;
     const balanceTotalElement = parseFloat(balanecTotalString); 
     const totalWithdraw = balanceTotalElement - withdrawFieldElement;
     balanceTotal.innerText = totalWithdraw;

})