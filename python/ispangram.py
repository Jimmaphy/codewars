"""
A pangram is a sentence that contains every single letter of the alphabet.
Casing is irrelevant for this. The most know pangram is:
"The quick brown fox jumps over the lazy dog"

Given a string, detect whether or not is is a pangram.
Ignore numbers and punctuation.
"""

def is_pangram(s):
    # Get a list of all the unique alpha characters 
    l = set([x for x in s.lower() if x.isalpha()])

    # Check whether the list is 26 charachters long
    return len(l) == 26

print(isPangram("The quick brown fox jumps over the lazy dog."));
print(isPangram("This is not a pangram."));
