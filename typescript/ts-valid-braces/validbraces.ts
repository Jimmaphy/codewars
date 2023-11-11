/* Write a function that takes a string of braces,
 * and determines if the order of braces is valid.
 * Return true if valid, false if invalid.
 *
 * All input strings will be nonempty.
 * A string of braces is considered valid if all braces are matched.
 *
 * "(){}[]"   => true
 * "([{}])"   => true
 * "(}"       => false
 * "[(])"     => false
 * "[({})](]" => false
 * "(((({{"   => false
 *
 * Tags: algorithms
 */

export function validBraces(braces: string): boolean {
  // Create a stack to check for the next character
  const checkStack: string[] = [];
  let result = true;

  // Check if the first charachter is a closing character
  const closingBrace: RegExp = new RegExp('\\)|\\]|\\}');
  if (closingBrace.test(braces[0])) { return false; }
  
  // Go over all the letters
  braces.split('').forEach((char) => {
    // If a new set of braces is found, add the opposite to the stack
    switch (char) {
      case '(':
        checkStack.push(')');
        break;
      case '{':
        checkStack.push('}');
        break;
      case '[':
        checkStack.push(']');
        break;

      // Check whether the current ending brace matches the previous brace
      default:
        if (char !== checkStack.pop()) { result = false }
        break;
    }
  });

  // Check if the stack is empty
  if (checkStack.length > 0) result = false;

  // Return the result of the algorithm
  return result;
}

console.log(validBraces('(){}[]'));
console.log(validBraces('([{}])'));
console.log(validBraces('(}'));
console.log(validBraces('[(])'));
console.log(validBraces('[({})](]'));
console.log(validBraces('(((({{'));
