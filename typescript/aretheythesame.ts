/* Given two arrays 'a' and 'b', write a function that checks whether they have the "same" elements.
 * The elements should have the same multiplicities too, aka appear the same amount of times.
 * Order is not important.
 *
 * "Same" means here that the elements in 'b' are the elements in 'a' squared.
 * If 'a' or 'b' are null, return false since the problem makes no sense.
 */

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  // Check for null values, if any is null, return false
  if (a1 === null || a2 === null) {
    return false;
  }

  // Square all the numbers into a new array
  let squared_a = a1.map((value) => Math.pow(value, 2));
  
  // Loop over all the numbers of a2
  a2.forEach((value) => {
    // Check whether the squared array contains the current value
    if (squared_a.includes(value)) {
      // Remove that value from the array
      squared_a.splice(squared_a.indexOf(value), 1);
    }
  })

  // Return true if the squared list is empty, 
  return (squared_a.length === 0 && squared_a.length !== a1.length) || (a1.length === 0 && a2.length === 0);
}

// Test data
let a1: number[] = [121, 144, 19, 161, 19, 144, 19, 11];
let a2: number[] = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));

a1 = [];
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2));

a1 = [];
a2 = [];
console.log(comp(a1, a2));
