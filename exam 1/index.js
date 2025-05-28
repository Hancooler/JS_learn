function whosPaying(names) {
  // Get the total number of people in the list
  const numberOfPeople = names.length;

  // Generate a random number between 0 and the last index of the array
  const randomChoice = Math.floor(Math.random() * numberOfPeople);

  // Select the person at the randomly chosen index
  const personPaying = names[randomChoice];

  // Return the string indicating who is buying lunch
  return `${personPaying} is going to buy lunch today!`;
}