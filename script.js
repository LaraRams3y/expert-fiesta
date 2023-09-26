//'use strict';

console.log("Hello Piggy Fan!");
//alert("You've found the hub for Piggy Hairstyles! Not a Piggy Fan! ? Enter anyway and click on Partner Link to learn about Dog Hairstyles!");
const theirName = getName();
let theirEmail = getEmail();

function getName() {
    const usersName = prompt("Hiya! Tell us your name so we can personalize your experience!");
    console.log(usersName);
    return usersName;
}

//const theirName = getName();
//console.log(theirName);

function getEmail() {
    const userEmail = prompt("Want wheekly Piggy Updates? Give us your email!");
    console.log(userEmail);
    return userEmail;
}

// const theirEmail = getEmail

function greetUser() {
    document.write("Hi " + theirName + ", welcome to the wonderful world of Piggy Hairstyles!");
}

function specialMessage(usersName) {
    let required = 'Piggy Fan!';
    while (usersName != required) {
        usersName = prompt('Thnx for the email, but wrong name! LOL! We think ur name is actually "Piggy Fan!"? Try that name thing again.');
    }
    if (usersName == required) {
        document.write('Wheek!Wheek!Wheek! You dah best hooman!');
    }
}

//if (usersName == "Piggy Fan!"){
//    document.write("Wheek!Wheek!Wheek! You dah best hooman!");
//} else if (usersName == "Zia"){
//    document.write("Wheek. Come on, Z, are you sure you aren't a Piggy Fan! ?");
//} else if (usersName == "Justus"){
//    document.write("Wheek. Come on, J, are you sure you aren't a Piggy Fan! ?");     
//} else if (usersName == "Kassie"){
//    document.write("Wheek. Come on, Kassie, are you sure you aren't a Piggy Fan! ? Hint, hint!");
//} else if (usersName == "Alyson"){
//    document.write("Wheek. Come on, Alyson, are you sure you aren't a Piggy Fan! ? Hint, hint!");
//} else if (usersName == "Andrew"){
//    document.write("Wheek. Come on, Andrew, are you sure you aren't a Piggy Fan! ?");
//} else {
//    document.write("Yay! Can't wait to transform you into a Piggy Fan!");
//}


function thankYouMessage() {
    document.write("Thank you for visiting us, Piggy Fan! We'll send your Piggy News to " + theirEmail);
}

function rateMyPage(){
    let rating = prompt("Now hooman. Plez rate our web page 1 thru 5. The more luv U gives us, the more piggy luvs U get back!");

    for (let i = 0; i < rating; i++){
        document.write("<img class='loop-img' src='Images/skinnypig.jpg' alt='cute skinny pig, giving u some luve!'/>");
    }
}