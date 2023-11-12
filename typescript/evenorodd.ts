/* Create a function that takes an integer as an argument and returns whether its even.
 * Return "Even" or "Odd".
 */

export function evenOrOdd(n: number): string {
  // Check whether the last bit is a one, return the required string after
  return (n & 1) === 1 ? 'Odd' : 'Even';
}

console.log(evenOrOdd(1))   // Odd
console.log(evenOrOdd(2))   // Even
console.log(evenOrOdd(-1))  // Odd
console.log(evenOrOdd(-2))  // Even
console.log(evenOrOdd(0))   // Even
