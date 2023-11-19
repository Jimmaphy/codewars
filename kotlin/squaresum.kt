package solution

/**
 * Sum all the numbers in an array, but sum their squares.
 * An array [1, 2, 2] should get: sqr(1) + sqr(2) + sqr(2) = 9.
 * Account for empty arrays.
 */

fun squareSum(n: Array<Int>): Int {
    // Match the size to account for empty arrays
    // If the array is not empty, reduce the number by squaring every number

    when (n.size) {
        0 -> return 0
        else -> return n.fold (0) { total, number -> total + (number * number) }
    }
}