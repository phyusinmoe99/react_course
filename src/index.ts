const items: string[] = ["rock", "paper", "scissor"];

const play = (item: string): string => {
    
    let random: string = items[Math.floor(Math.random() * items.length)];
    console.log(random);
    
    if (item === random) {
        return "A draw game!";
    } else if ((item === "rock" && random === "scissor") ||
        (item === "scissor" && random === "paper") ||
        (item === "paper" && random === "rock")) {
        return "You Win!!!"        
    }else return "You loose";
}

console.log(play("paper"));