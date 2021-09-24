const billAmount = document.querySelector("#bill amount");
const cashGiven = document.querySelector("#cash given");
const checkButton = document.querySelector("#check button");
const message = document.querySelector("#error-message");

checkButton.addEventListener("click", function validateBillAndCashAmount() {
//message.style.display = "none";
if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value ) {
    const amountToBeReturnes cashGiven.value - billAmount.value;
    calculateChange(amountToBeReturnes);

} else {
    showMessage(" the cash");
}
    
} else {
    showMessage("Invalid bill Amount");
});
//function calculateChange()
   function showMessage(msg) {
       message.style.display = "block";
       message.innerText = msg;
   }
 