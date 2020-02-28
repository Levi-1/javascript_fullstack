const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.on('line', function (input){
    var number = '' + input
    writeDownThis(number)
    rl.close();
})

rl.on('close', function() {
    process.exit(0);  
});  
function writeDownThis (number) {
    let sum = addAll(number)
    let spell = readIt(sum).trim()
    console.log(spell)
}

function addAll (number) {
    let sum = 0
    var arr = number.split("").map(_ => +_)
    for (var i of arr) {
        sum = sum + i
    }
    return sum
}

function readIt (sum) {
    var spell_list = sum.toString().split("").map(_ => +_)
    let spell = ''
    for (var item of spell_list) {
        spell = spell + getSpell(item) + ' '
    }
    return spell
}

function getSpell (item) {
    switch (item) {
        case 0:
            return 'lin'
        case 1:
            return 'yi'
        case 2:
            return 'er'
        case 3:
            return 'san'
        case 4:
            return 'si'
        case 5:
            return 'wu'
        case 6: 
            return 'liu'
        case 7:
            return  'qi'
        case 8:
            return  'ba'
        case 9:
            return  'jiu'
        default:
            break;
    }
}