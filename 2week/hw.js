const js_range = document.getElementById("js-range");
const js_title = document.querySelector(".js-title");
const js_guess = document.getElementById("js-guess");
const display = document.getElementById("js-result");

// Handle Range Function
const handleRange = (e) => {
    const selectSpan = js_title.querySelector("span");
    selectSpan.innerHTML = js_range.value;
};

// Handle Random Number Game Function
const handleGame = (e) => {
    e.preventDefault();

    const input_x = js_guess.querySelector("input");
    const jr = js_range.value;
    const guess_num = parseInt(input_x.value);  // User guess number
    const rand_num = Math.floor(Math.random() * jr);    // Rand number
    const displaySpan = display.querySelector("span");
    
    // Compare guess_num vs rand_num
    if(guess_num == rand_num){
        displaySpan.innerHTML = `
        You choose: ${guess_num},
        the machine choose: ${rand_num}.<br/>
        <strong>${"Same!"}</strong>
        `
    } else if(guess_num > rand_num){
        displaySpan.innerHTML = `
        You choose: ${guess_num},
        the machine choose: ${rand_num}.<br/>
        <strong>${"You win!"}</strong>
        `
    } else{
        displaySpan.innerHTML = `
        You choose: ${guess_num},
        the machine choose: ${rand_num}.<br/>
        <strong>${"You lost!"}</strong>
        `
    }
};

// when event is called
js_range.addEventListener("input", handleRange);
js_guess.addEventListener("submit", handleGame);