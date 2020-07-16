//feetToMile

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var mileIs = feetToMile(15);
mileIs = mileIs.toFixed(8);
console.log("Miles is:", mileIs);