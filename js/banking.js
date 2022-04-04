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
    updateTotalField("deposit-total", previousAmount);
    updateBalance(previousAmount, true)
});

// withdraw button event handler
document.getElementById("withdraw-button").addEventListener("click", function () {
    const previousAmount = getInputValue("withdraw-input");
    updateTotalField("withdraw-total", previousAmount);
    updateBalance(previousAmount, false);
});