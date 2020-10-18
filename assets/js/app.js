class GuessGame {
    constructor(chances){
        this.number;
        this.chances = chances;
        this.clear();
    }
    
    clear(){
        this.number = Math.floor(Math.random() * 10);
        userGuess.value = "";
        helper.innerText = "";
        document.body.style.backgroundColor = "#f4f1de";
        this.chances = 5;
        guessBtn.disabled = false;
        guessBtn.classList.remove("disabled");
        resetBtn.classList.add("d-none");
    }

    isValidGuess(guess){        
        if (guess < 0 || guess > 10 || guess == "" || typeof guess == String) {
            this.clear();
            document.body.style.backgroundColor = "brown";
            helper.innerHTML = "Guessed number should be between <b>0</b> and <b>10!</b>";
        }
        else {
            this.hotOrNot(guess);
        }
    }

    hotOrNot(guess){
        if(this.chances > 0){
            if (this.number - guess === 0){
                document.body.style.backgroundColor = "#49a078";
                helper.innerText = "YOU GUESSED RIGHT";
                guessBtn.disabled = true;
                guessBtn.classList.add("disabled");
                resetBtn.classList.remove("d-none");
            }
            else if (this.number - guess <= 2 && this.number - guess >= -2){
                document.body.style.backgroundColor = "#e63946";
                helper.innerText = "Hot guess but nope";
                this.chances--;
            }
            else {
                document.body.style.backgroundColor = "#80b3ff";
                helper.innerText = "Cold one";
                this.chances--;
            }
        }
        else{
            this.clear();
            document.body.style.backgroundColor = "#bf3100";
            helper.innerText = "You are out of chances :( Please try again";
        }

    }

}

// Initials
let chances = 5;
const userGuess = document.getElementById("userGuess");
const helper = document.getElementById("helper");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");

const game = new GuessGame(chances);



guessBtn.addEventListener("click", () => {
    let val = userGuess.value;
    // if(val == ""){
    //     val = 0;
    // }
    game.isValidGuess(val);
    
});

resetBtn.addEventListener("click", () => {
    game.clear();
})