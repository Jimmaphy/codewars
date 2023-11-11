"""
Create a function that takes a list of non-negative integers
and strings and return a new list with the strings filtered out.
"""

def filter_list(l):
    'return a new list with the strings filtered out'
    return [x for x in l if type(x) is int]

print(filter_list([1, 2, 'a', 'b']))                    # [1, 2]
print(filter_list([1, 'a', 'b', 0, 15]))                # [1, 0, 15]
print(filter_list([1, 2, 'aasf', '1', '123', 123]))     # [1, 2, 123]
