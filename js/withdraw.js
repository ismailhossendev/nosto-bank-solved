/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function() {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  if ((isNaN(newWithdrawAmount)) || (newWithdrawAmount <= 0) || (previousBalanceTotal < newWithdrawAmount)) {
    if (newWithdrawAmount <= 0) {
      alert('Please Enter More Then 0 !')
    }
    else if (isNaN(newWithdrawAmount)) {
      alert('Please Enter Number(0-9)')
    }
    else {
      alert(`Please Enter Less then ${previousBalanceTotal}`)
    }
    return
  }
  setTextElementValueById("withdraw-total", newWithdrawTotal);
  setTextElementValueById("balance-total", newBalanceTotal);
});