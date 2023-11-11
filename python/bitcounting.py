"""
Write a function that returns the number of bits that are equal to one in numbers.
The input is always non-negative and decimal.
"""

def count_bits(n):
    # Count the bits that are one
    ones = [x for x in bin(n) if x == '1']

    # Return the length of the list
    return len(ones)


print(count_bits(1234)) # 5
