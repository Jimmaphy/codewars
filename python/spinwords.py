"""
Write a function that takes in a string of one or more words,
return the string but with all five or more letter words reversed.

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
"""

def spin_words(sentence):
    # Seperate the spin
    words = sentence.split(' ')

    # Flip all the words with more than 5 letters.
    words = map(lambda x: x if len(x) < 5 else x[::-1], words)

    # Return the combined sentence
    return " ".join(words)


print(spin_words("Hey fellow warriors"))    # Hey wollef sroirraw
print(spin_words("This is a test"))         # This is a test
print(spin_words("This is another test"))   # This is rehtona test
