const playerAction = process.argv[2]
if(playerAction !='rock' && playerAction !='scissor' && playerAction !='paper'){
    throw new Error('不符合规则，重新输入');
}
else{
    let computerAction=null;
    let random = Math.random()*3;
    if(random < 1){
        computerAction = 'rock';
        console.log('石头');
    }
    if(random > 2){
        computerAction = 'scissor';
        console.log('剪刀');
    }
    else{
        computerAction = 'paper';
        console.log('布');
    }
    if (playerAction == computerAction) {
        console.log('p')
    }
    else if ((playerAction == 'scissor' && computerAction == 'rock') || (playerAction == 'rock' && computerAction == 'paper') || (playerAction == 'paper' && computerAction == 'scissor')) {
        console.log('lose');
    }
    else {
        console.log('win');
    }
}