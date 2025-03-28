function lifeInWeeks(currentAge) {
    const maxAge = 90; // The age we expect to live until
    const yearsLeft = maxAge - currentAge; // Calculate years left
    const daysLeft = yearsLeft * 365; // Calculate days left
    const weeksLeft = yearsLeft * 52; // Calculate weeks left
    const monthsLeft = yearsLeft * 12; // Calculate months left

    // Log the output in the required format
    console.log(`You have ${daysLeft} days, ${weeksLeft} weeks, and ${monthsLeft} months left.`);
}

// Example usage:
lifeInWeeks(56);