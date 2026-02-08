function myF()
    {
        let randomNumber = Math.floor(Math.random() * 9) + 1;
        let guessedNumber = document.getElementById("num1").value;
        if (guessedNumber == randomNumber) {
            document.getElementById("p1").innerHTML = "Good Work!";
            document.getElementById("p1").style.color= "green";
        }
        else {
            document.getElementById("p1").innerHTML = "Not matched, the number was " + randomNumber;
            document.getElementById("p1").style.color= "red";
        }
        document.getElementById("num1").value='';
    }
