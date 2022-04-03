//deposit button event handler
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
})