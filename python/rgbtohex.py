"""
Make a function that if passed RGB decimal values, returns the hexadecimal representation.
Valid values are 0 - 255, round if the values are outside of that range.
Your answer should always be 6 characters long.
"""

def rgb(r, g, b):
    # Get all the values into a list, making sure they are within range
    rgb_dec = [bounds(x, 0, 255) for x in [r, g, b]]

    # Convert the values to hex, adding zeros if the value is below 10
    rgb_hex = [hex(x)[2:].zfill(2) for x in rgb_dec]

    # Return the combined RGB value in uppercase
    return "".join(rgb_hex).upper()

def bounds(number, lower, upper):
    # Return the number within its bounds
    number = lower if number < lower else number
    number = upper if number > upper else number
    return number


print(rgb(255, 255, 255))   # FFFFFF
print(rgb(255, 255, 300))   # FFFFFF
print(rgb(0, 0, 0))         # 000000
print(rgb(128, 0, 211))     # 9500D3
