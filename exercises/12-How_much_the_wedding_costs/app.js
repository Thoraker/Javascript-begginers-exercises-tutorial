let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
    if(guests>200){
        return(20000);
    }
    else if(guests>100){
        return(15000);
    }
    else if(guests>50){
        return(10000);
    }
    else return(4000);

    // return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
