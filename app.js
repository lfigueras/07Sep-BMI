
let jan = {
    name: 'John',
    bills:[123,4345,433,878],
    tipsCalc(){
        this.allTips = [];
        this.finalAmount = [];
        for (let i = 0; i < this.bills.length; i++){
            //Determine the percentage;
            if (this.bills[i] < 50){
                percentage = .2;
            }else if(this.bills[i] > 50 && this.bills < 200){
                percentage = .15;
            }else{
                percentage = .1;
            }
            this.allTips[i] = this.bills[i] * percentage;
            this.finalAmount[i] = this.bills[i] + this.bills[i] * percentage;
        }
    }
}
let victor = {
    name: 'Victor',
    bills:[770,3750,1100,450],
    tipsCalc(){
        this.allTips = [];
        this.finalAmount = [];
        for (let i = 0; i < this.bills.length; i++){
            //Determine the percentage;
            if (this.bills[i] < 1000){
                percentage = .2;
            }else if(this.bills[i] >= 1000 && this.bills <= 3000){
                percentage = .1;
            }else{
                percentage = .25;
            }
            this.allTips[i] = this.bills[i] * percentage;
            this.finalAmount[i] = this.bills[i] + this.bills[i] * percentage;
        }
    }
}
jan.tipsCalc();
victor.tipsCalc();
console.log(jan,victor);
jan.average = chargeAverage(jan.allTips);
victor.average = chargeAverage(victor.allTips);

function chargeAverage(allTips){
    let sum = 0;
    for(let i = 0; i < allTips.length; i++){
        sum = sum + allTips[i];
    }
    return sum / allTips.length;
}
if (jan.average > victor.average){
    console.log('John has the highest bill with an average of ' + jan.average);
}else{
    console.log('Victor has the highest bill with an average of ' + victor.average);
}