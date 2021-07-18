//SCRIPTS FOR FORMS....

let counter = 0;

function count(){
    counter++;
    document.querySelector('#counter').innerHTML = counter;
}



let increase = 0;

function add(){
    increase++;
    document.querySelector('#multiply').innerHTML = increase;
}


let rate = 0;

function rating(){
    rate++;
    document.querySelector('#many').innerHTML = rate;

    if (rate === 10){
        alert(`Counter is at ${rate}`);
    }
}


let i = 0;
 do{
     document.write(i);
     i++;
 } while(i < 18);
 document.write('<br>');


let age = 45;
if (age < 18){
    document.write('You are not of age')
}else {
    document.write('Legible')
}
document.write('<br>');

 
let myFriends = [
    ['SETH', 'Male',25],
    ['MARY' ,'Female' ,20],
    ['CURFUL' , 'Female' , 20]
]
document.write(myFriends [0][1]);
document.write('<br>');

document.write(myFriends [1][2]);
document.write('<br>');

document.write(myFriends [2][0]);
document.write('<br>');

i = 0;
while (i < 5){
    document.write(i);
    i++; 
}

