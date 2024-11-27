
document.getElementById("askButton").addEventListener("click", function() {

    
    let userName = document.getElementById("userName").value.trim();

   
    userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

   
    let userQuestion = document.getElementById("userQuestion").value.trim();
    
    
    if (userQuestion === "") {
        alert("Please ask a question!");
        return;
    }


    console.log(`${userName ? userName : "User"} asked: ${userQuestion}`);

   
    let randomNumber = Math.floor(Math.random() * 8);


    let eightBall = "";

   
    if (randomNumber === 0) {
        eightBall = "It is certain";
    } else if (randomNumber === 1) {
        eightBall = "It is decidedly so";
    } else if (randomNumber === 2) {
        eightBall = "Reply hazy, try again";
    } else if (randomNumber === 3) {
        eightBall = "Cannot predict now";
    } else if (randomNumber === 4) {
        eightBall = "Do not count on it";
    } else if (randomNumber === 5) {
        eightBall = "My sources say no";
    } else if (randomNumber === 6) {
        eightBall = "Outlook not so good";
    } else if (randomNumber === 7) {
        eightBall = "Signs point to yes";
    }

  
    document.getElementById("magic-ball").innerText = eightBall;

    console.log(`Magic 8 Ball says: ${eightBall}`);
});
