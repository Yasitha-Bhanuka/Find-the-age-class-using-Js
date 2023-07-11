//if statement = a basic form of decision making if a condition is true, 
//               then do something if not, then don't do it.

// let age = 15;

// if(age <= 12){
//     console.log("You are a kid.Go to the school");
// }
// else if (age <= 18){
//     console.log("You are in the teen age.");
// }else if(age <= 35){
//     console.log("You are in the youth generation.");
// }
// else if(age >= 35){
//     console.log("You are an adult, Be a resposible person.");
// }
// else{
//     console.log("Invalid input.");
// }

// lets write this code using html text boxes. And display the values.

document.getElementById("button").onclick = function(){

    let age = document.getElementById("age").value;

    if(age <= 12){
        document.getElementById("msg").innerHTML = "You are a kid.<br>Go to the school";
    }
    else if (age <= 18){
        document.getElementById("msg").innerHTML = "You are in the teen age.<br>You want to go to the higher study";
    }
    else if(age <= 35){
        document.getElementById("msg").innerHTML = "You are in the youth generation.<br>Work hard and earn more money";
    }
    else if(age >= 35){
        document.getElementById("msg").innerHTML = "You are an adult, Be a resposible person.";
    }
    else{
        document.getElementById("msg").innerHTML = "Invalid input.";
    }
}