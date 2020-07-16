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
    var tableWoodNumber = table * 10;
    var chairWoodNumber = chair * 5;
    var bedWoodNumber = bed * 20;
    var totalWoodNumber = tableWoodNumber + chairWoodNumber + bedWoodNumber;
    return totalWoodNumber;
}
var numberOfTableChairBed = woodCalculator(5, 10, 5);
console.log(numberOfTableChairBed);

//brickCalculator