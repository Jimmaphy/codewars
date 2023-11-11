"""
Jaden Smith is known for his philosophy on twitter, and the way he writes it.
Capitalizing every word in the sentence. Write a function that capitalizes each word.
"""

def to_jaden_case(string):
    # Capitalize every word in the string
    words = [word.capitalize() for word in string.split(" ")]

    # Return the combines sentence
    return " ".join(words)


print(to_jaden_case("How can mirrors be real if our eyes aren't real"))
