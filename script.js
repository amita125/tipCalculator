let billOutput = document.getElementById('billOutput');
let billAmount;
let rating;
let tip_amount;


const billInput = () => {
     billAmount = document.getElementById('billInput').value;
     if(billAmount > 0 && billAmount !== NaN){
        calculateRating();
     }else{
         billOutput.innerHTML = "Please, enter a Valid Amount :(" 
         billInput();
     }   
     console.log(billAmount, tip_amount)  
}

const calculateRating = () => {
     rating = document.getElementById('rateInput').value;
    if(rating <= 10 && rating >= 0 && rating !== NaN){
        calculateTip(billAmount, rating)
    }else{
        billOutput.innerHTML = "Please, rating should be between 0 and 0. Thanks :)";
        calculateRating();
    }
}

const calculateTip = (billAmount, rating) => {
    if(rating < 4){
        tip_amount = billAmount * 0;
    } else if(rating < 6){
        tip_amount = billAmount * 0.1;
    }else if(rating < 8){
        tip_amount  = billAmount * 0.2
    }else{
        tip_amount = billAmount * 0.3;
    }
    
}

const showResult = () => {
    billInput();
    let total = Number(billAmount) + Number(tip_amount);
    billOutput.innerHTML = `Your billAmount is £${billAmount}, your tip is £${tip_amount} and yout total bill is £${total}`
}



console.log(billAmount, tip_amount, total);





