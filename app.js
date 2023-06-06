const express = require('express');
const app = express();
const ejs = require('ejs');

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Define a route that renders the EJS file
app.get('/', (req, res) => {
  // Variables for if-else flow control
  const condition = true;
  let resultIfElse = '';

  // If-else flow control
  if (condition) {
    resultIfElse = 'Condition is true';
  } else {
    resultIfElse = 'Condition is false';
  }

  // Variables for while loop
  let i = 0;
  let resultWhile = '';

  // While loop
  while (i < numbers.length) {
    resultWhile += `${numbers[i]} `;
    i++;
  }

  // Variable for for loop
  let resultFor = '';

  // For loop
  for (let j = 0; j < numbers.length; j++) {
    resultFor += `${numbers[j]} `;
  }

  // Variable for do-while loop
  let resultDoWhile = '';
  let k = 0;

  // Do-while loop
  do {
    resultDoWhile += `${numbers[k]} `;
    k++;
  } while (k < numbers.length);

  // Render the EJS file with the flow control results
  res.render('index', {
    resultIfElse,
    resultWhile,
    resultFor,
    resultDoWhile
  });
});

// Start the server
app.listen(3008, () => {
    console.log(`Server running on http://localhost:3008`);
});
