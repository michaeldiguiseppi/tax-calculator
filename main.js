module.exports = {
    calculate: function(amount) {
        var firstAmount = 10 * 0.1;
        var secondAmount = 10 * 0.07;
        var thirdAmount = 10 * 0.05;
        if(amount <= 10) {
            //tax amount is 10%
            taxTotal = amount * 0.1;
        } else if (amount > 10 && amount <= 20) {
            //tax amount is 7%
            amount -= 10;
            taxTotal = firstAmount + (amount * 0.07);
        } else if (amount > 20 && amount <= 30) {
            //tax amount is 5%
            amount -= 20;
            taxTotal = +((firstAmount + secondAmount + (amount * 0.05)).toFixed(2));
        } else {
            //tax amount is 3%
            amount -= 30;
            taxTotal = +((firstAmount + secondAmount + thirdAmount + (amount * 0.03)).toFixed(2));
        };
        return taxTotal;
    }
}



