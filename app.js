const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function calculateNoOfNotes(amount){
    console.log(vailableNotes)
    // for( var i=0; i < availableNotes.length; i++) {
    //              const numberOfNotes = Math.trunc(
    //                   amountToBeReturned / availableNotes[i]
    //               );
        //          amountToBeReturned = amountToBeReturned % availableNotes[i];

}

function validateBillAndCashAmount() {
    var bill = Number(billAmount.value)
    var cash = Number(cashGiven.value)

    if (cash < 0 || bill < 0) {
        console.log("Invalid amount")
    } else {
        if (bill > cash) {
            console.log("Your amount is less than bill amount")

        } else {
            console.log("thanku for coming")
        }
    }
    
    var change=cash-bill
    calculateNoOfNotes(change)
}
checkButton.addEventListener("click", validateBillAndCashAmount)

// checkButton.addEventListener("click", function validateBillAndCashAmount() {
// hideMessage();
// if (billAmount.value > 0) {
//     if (cashGiven.value >= billAmount.value ) {
//     const amountToBeReturned = cashGiven.value - billAmount.value;
//     calculateChange(amountToBeReturned);

// } else {
//     showMessage("The cash is less than bill amount");
// }

// } else {
//     showMessage("Invalid bill Amount");
//     }
// });

// function calculateChange(amountToBeReturned) {
//      for( let i=0; i < availableNotes.length; i++) {
//          const numberOfNotes = Math.trunc(
//              amountToBeReturned / availableNotes[i]
//          );
//          amountToBeReturned = amountToBeReturned % availableNotes[i];
//          numberOfNotes[i].innerText = numberOfNotes;
//      }

// }
// function hideMessage() {
//     message.style.display ="none";
// }
//    function showMessage(msg) {
//        message.style.display = "block";
//        message.innerText = msg;
//    }

