// Immutability: Declared as const
const start = new Date(2080, 0, 30);
const end = new Date(2080, 1, 10);

// Deterministic and Pure Function: Calculates the difference in days between two dates
function daysBetween(date1, date2) 
{
    return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
}

// Higher-Order Function
function composeFunctions(daysFunction) 
{
    return (startDate, endDate) => daysFunction(startDate, endDate);
}

// Main Function: Uses Higher-Order Function and displays the result
function main()
{
    // Higher-Order Function: ComposeFunctions takes a function as an argument
    const composedFunction = composeFunctions(daysBetween);

    // Calculate and display the result
    const result = composedFunction(start, end);
    console.log(`Number of days between ${start.toDateString()} and ${end.toDateString()}: ${result} days`);
}

// Invoke the main function
main()
