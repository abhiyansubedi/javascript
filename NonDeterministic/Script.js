function main ()
{
    

    num1 = getRandomNumbers(1,9999);
    num2 = getRandomNumbers(1,9999);

    console.log(`Random Number 1: ${num1}`)
    console.log(`Random Number 2 : ${num2}`)

}

function getRandomNumbers(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
main()