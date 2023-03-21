// // question1

// var num = prompt("enter +ve number");

// // a
// document.write(num);

// // b

// var roundOff = Math.round(num);
// document.write(roundOff);

// // c

// var roundDown = Math.floor(num);
// document.write(roundDown);

// // d 

// var roundUp = Math.ceil(num);
// document.write(roundUp);





// // question2

// var num = prompt("enter -ve floating number");

// // a
// document.write(num);

// // b

// var roundOff = Math.round(num);
// document.write(roundOff);

// // c

// var roundDown = Math.floor(num);
// document.write(roundDown);

// // d 

// var roundUp = Math.ceil(num);
// document.write(roundUp);





// // question3

// var num = prompt("enter number and js will give you it's absolute value");
// if (num < 0)  {
//     num = num * -1;
//     document.write("the absolute value off -" + num + "  "  + " is " + num);

// }
// else {
//     document.write(num);

// }










// // question4

// function dice() {
//     var num = Math.random() * 6
//     num = Math.floor(num);
//     console.log(num);


//     if (num === 0) {
//         var img = document.getElementById("myImage");
//         img.src = "./images/dice1.jpg";
//     }

//     else if (num === 1) {
//         var img = document.getElementById("myImage");
//         img.src = "./images/dice2.jpg";
//     }
//     else if (num === 2) {
//         var img = document.getElementById("myImage");
//         img.src = "./images/dice3.jpg";
//     }

//     else if (num === 3) {
//         var img = document.getElementById("myImage");
//         img.src = "./images/dice4.jpg";
//     }

//     else if (num === 4) {
//         var img = document.getElementById("myImage");
//         img.src = "./images/dice5.jpg";
//     }

//     else if (num === 5) {
//         var img = document.getElementById("myImage");
//         img.src = "./images/dice6.jpg";
//     }
// }








// // question 5
// function onflip() {
//     var num = Math.random();
//     num = Math.floor(num * 2) + 1;
//     console.log(num);

//     if (num === 1) {
//         var image = document.getElementById("image");
//         image.src = "./images/head.png"
//     }

//     if (num === 2) {
//         var image = document.getElementById("image");
//         image.src = "./images/tail.png"
//     }
// }







// // question 6

//     var num = Math.random();
//     num = Math.floor(num * 100) + 1;
//     document.write(`Random number beween 1 and 100 is <b>${num}`  );







// // question 7

// var  weight = prompt("what is  your  weight??", `50kgs`);
// document.write(`the weight of the user  is ${weight}`);








// question 8
var input = +prompt("guess a number:", 1);

var random = Math.floor(Math.random()*2) + 1;

if (random === input) {
var image = document.getElementById("guessNumber");
    image.src = "./images/hurray.gif";

}

else if (random !== input) {
    var image = document.getElementById("guessNumber");
    image.src = "./images/woe.gif"
    var heading = document.getElementById("correctNum");
    heading.innerHTML = `Correct number is ${random}`
    
    }
