

// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked')
    // step-2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    // also make sure to convert the input into a number by using parseFloat
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
    // console.log(newWithDrawAmount);

    //step-7: clear the input field
    withdrawField.value = '';

    if(isNaN(newWithDrawAmount)){
        alert('please provide a valid number')
        return; 
    }
    // step-3: Get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal)
   
    // step-5: get the previce balance total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal)

     

    if(newWithDrawAmount > previousBalanceTotal){
        alert('tor baap er bank e eto taka nai');
        return;
    }

     // step-4:calculate total withdaraw amount
    // set total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6: calculate new balance total
    //set the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   
})