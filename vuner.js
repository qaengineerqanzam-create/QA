// vulnerable_code.js

// Example 1: SQL Injection vulnerability
function getUserData(userId) {
  const query = `SELECT * FROM users WHERE id = ${userId}`; // vulnerable to SQL injection
  // Simulate executing the query
  console.log(`Executing query: ${query}`);
}

// Example 2: Unsafe eval usage
function evaluateUserInput(input) {
  // Dangerous: eval executes arbitrary code
  eval(input);
}

// Example 3: Insecure random number generation
function getRandomNumber() {
  return Math.random(); // Insecure for cryptographic purposes
}

// Example 4: Cross-site scripting (XSS)
function setInnerHTML(userInput) {
  document.body.innerHTML = userInput; // Vulnerable to XSS
}