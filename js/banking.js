//get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const fieldAmount = inputField.value;
    const previousAmount = parseFloat(fieldAmount);

    //clear input field
    inputField.value = "";

    return previousAmount;
}

//update total field
function updateTotalField(totalId, previousDepositAmount) {
    const totalField = document.getElementById(totalId);
    const totalAmountText = totalField.innerText;
    const previousTotal = parseFloat(totalAmountText);

    totalField.innerText = previousTotal + previousDepositAmount;
};

//update total balance
function updateBalance(previousAmount, isAdd){
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + previousAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - previousAmount;
    }
}

//deposit button event handler
document.getElementById("deposit-button").addEventListener("click", function () {
    const previousAmount = getInputValue("deposit-input");
    if(previousAmount > 0){
        updateTotalField("deposit-total", previousAmount);
        updateBalance(previousAmount, true);
    }
    else {
        alert("Wrong Input")
    }
});

// withdraw button event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    const previousAmount = getInputValue("withdraw-input");
    if (previousAmount > 0){
        updateTotalField("withdraw-total", previousAmount);
        updateBalance(previousAmount, false);
    }
    else {
        alert("Wrong Input")
    }
});


/* //deposit button event handler
document.getElementById ("deposit-button").addEventListener("click", function(){
    const depositInput = document.getElementById ("deposit-input");
    const depositAmount = depositInput.value;
    const previousDepositAmount = parseFloat(depositAmount)

    // get deposit amount 
    if(typeof depositAmount == 'number' || depositAmount > 0){
        const depositTotal = document.getElementById ("deposit-total");
        const depositTotalText = depositTotal.innerText;
        const previousDepositTotal = parseFloat(depositTotalText);

        depositTotal.innerText = previousDepositTotal + previousDepositAmount;

        //handle total balance 
        const balanceTotal = document.getElementById ("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat (balanceTotalText);

        balanceTotal.innerText = previousBalanceTotal + previousDepositAmount;
    }
    else{
        alert("Wrong Input")
    }

    //clear deposit input field
    document.getElementById ("deposit-input").value = "";
});

// withdraw button event handler
document.getElementById ("withdraw-button").addEventListener("click", function(){
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInput.value;
    const previousWithdrawAmount = parseFloat(withdrawAmount);
    
    // get withdraw amount
    if (typeof withdrawAmount == 'number' || withdrawAmount > 0){
        const withdrawTotal = document.getElementById("withdraw-total");
        const withdrawTotalText = withdrawTotal.innerText;
        const previousWithdrawTotal = parseFloat(withdrawTotalText);
        
        withdrawTotal.innerText = previousWithdrawAmount + previousWithdrawTotal;

        //handle total balance
        const balanceTotal = document.getElementById("balance-total");
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);

        balanceTotal.innerText = previousBalanceTotal - previousWithdrawAmount;
    }
    else{
        alert("Wrong Input")
    }
    
    // clear withdraw input 
    document.getElementById("withdraw-input").value = '';
}); */