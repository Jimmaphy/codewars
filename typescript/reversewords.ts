/* Complete the function that accepts a string and reverses each word in the string.
 * Spaces should be retained.
 */

export function reverseWords(str: string): string {
  // Get all the seperate words
  const words = str.split(' ');

  // Reverse all the words
  const reversed_words = words.map(word => word.split('').reverse().join(''));

  // Return the combines words, seperated by space
  return reversed_words.join(' ');
}

console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));
