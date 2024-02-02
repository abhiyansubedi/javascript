function PerformOperation(a, b, operation) 
{
    result = operation(a,b);
    console.log(`Result : ${result}`)
}

function main() 
{
    PerformOperation(5,3, (x,y) => x+y)
    PerformOperation(5,3, (x,y) => x*y)
}

main()