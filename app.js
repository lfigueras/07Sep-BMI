let jan = {
    name: 'John',
    bills:[1240,480,2680,1800,420],
    tipsCalc(){
        this.allTips = [];
        this.finalAmount = [];
        for (let i = 0; i < this.bills.length; i++){
            //Determine the percentage;
            if (this.bills[i] < 500){
                percentage = .2;
            }else if(this.bills[i] > 500 && this.bills < 2000){
                percentage = .15;
            }else{
                percentage = .1;
            }
            this.allTips[i] = this.bills[i] * percentage;
            this.finalAmount[i] = this.bills[i] + this.bills[i] * percentage;
        }
    }
}

jan.tipsCalc();
console.log(jan);
