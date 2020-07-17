//feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var mileIs = feetToMile(15);
mileIs = mileIs.toFixed(8);
console.log("Miles is:", mileIs);

//woodCalculator

function woodCalculator(table, chair, bed){
    var tableWoodNumber = table * 3;
    var chairWoodNumber = chair * 1;
    var bedWoodNumber = bed * 5;
    var totalWoodNumber = tableWoodNumber + chairWoodNumber + bedWoodNumber;
    return totalWoodNumber;
}
var numberOfTableChairBed = woodCalculator(5, 10, 5);
console.log("Wood needed:", numberOfTableChairBed, "cubic feet");

//brickCalculator

function brickCalculator(floorNo){
    var oneFeet = 1000;
    if(floorNo <= 10){
        var bricksNumber = ((15 * oneFeet) * floorNo);
        return bricksNumber;
    }
    
    else if( floorNo >= 11 && floorNo <=20){
        bricksNumber = ((150000) + ((floorNo - 10) * 12000));
        return bricksNumber;
    }
    else if( floorNo >= 21){
        bricksNumber = ((150000 + 120000) + ((floorNo - 20) * 10000));
        return bricksNumber;
    }
}

var total = brickCalculator(27);
console.log(total);


//tinyFriend

function tinyFriend(friendsName){
    var tinyName = friendsName[0];
    for(var i = 0; i < friendsName.length; i++){
        var currentName = friendsName[i];
        if(currentName < tinyName){
            tinyName = currentName;
        }
    }
    return tinyName;
}