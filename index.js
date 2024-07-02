let text = 'jkjlbkmybrjfhjhjghjhjfhjfjfhjfhjfjfhjfhjfhjfjhfghjfjfhjghj';
let number = 25;

const getNewArgument = function(argument){
    if(typeof(argument) !== 'string'){
        return "Передана не строка";
    }

    if (argument.length > 30) {
        return argument.slice(0, 30) + '...';
    }

    return argument.trim();
}

console.log(getNewArgument(number));
console.log(getNewArgument(text));