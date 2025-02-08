// Question 2
// 2. Do the same using switch case. 

let age = 25

switch(true){
    case (age<=12 && age>0):
        console.log("Child");
        break;
    case (age>=13 && age<=18):
        console.log("Teen");
        break;
    case (age>18):
        console.log("Adult");
        break;
    default:
        console.log("Invalid Input");
}
