// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

const textTotalAddBtn=document.querySelector(".addToBillBtn");
const billTypeText=document.querySelector(".billTypeText");
const callsTotalElem=document.querySelector(".callTotalOne");
const smsTotalElem=document.querySelector(".smsTotalOne");
const totalCostElem=document.querySelector(".totalOne");
var callsTotal = 0;
var smsTotal = 0;

function textBillTotal() {
    newStyle.classList.remove("warning");
    newStyle.classList.remove("danger");

    var billTypeEntered = billTypeText.value.trim();
    if(billTypeEntered=="call"||billTypeEntered=="Call"||billTypeEntered=="CALL"){
        callsTotal +=2.75;
    }
    else if (billTypeEntered=="sms"||billTypeEntered=="Sms"||billTypeEntered=="SMS"){
        smsTotal +=0.75;
    }

    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElem.innerHTML = totalCost.toFixed(2)

    if (totalCost >= 30 && totalCost<50) {
        totalCostElem.classList.add("warning");
    }
    else if (totalCost >= 50) {
        totalCostElem.classList.add("danger");
    }
    
};
textTotalAddBtn.addEventListener('click', textBillTotal);