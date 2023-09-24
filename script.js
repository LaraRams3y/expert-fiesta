//'use strict';

console.log("Hello Piggy Fan!");
alert("You've found the hub for Piggy Hairstyles! Not a Piggy Fan! ? Enter anyway and click on Partner Link to learn about Dog Hairstyles!");

function getName(){
    const usersName = prompt("Tell us your name so we can personalize your experience! **Special message for anyone named Piggy Fan!");
    return usersName;
}

//const theirName = getName();
//console.log(theirName);

function getEmail(){
    let userEmail = prompt("Want weekly Piggy Updates? Send us your email!");
    console.log(userEmail);
    return userEmail;
}

// const theirEmail = getEmail

function greetUser(){
    document.write("Hi " + theirName + ", welcome to the wonderful world of Piggy Hairstyles!");
}

function specialMessage(usersName){
if (usersName == "Piggy Fan!"){
    document.write("Wheek!Wheek!Wheek! You dah best hooman!");
} else if (usersName == "Zia"){
    document.write("Wheek. Come on, Z, are you sure you aren't a Piggy Fan! ?");
} else if (usersName == "Justus"){
    document.write("Wheek. Come on, J, are you sure you aren't a Piggy Fan! ?");     
} else if (usersName == "Kassie"){
    document.write("Wheek. Come on, Kassie, are you sure you aren't a Piggy Fan! ? Hint, hint!");
} else if (usersName == "Alyson"){
    document.write("Wheek. Come on, Alyson, are you sure you aren't a Piggy Fan! ? Hint, hint!");
} else if (usersName == "Andrew"){
    document.write("Wheek. Come on, Andrew, are you sure you aren't a Piggy Fan! ?");
} else {
    document.write("Yay! Can't wait to transform you into a Piggy Fan!");
}

}

function thankYouMessage (){
    document.write("Thank you for visiting us, " + theirName + ". We'll send your Piggy News to " + theirEmail);
}