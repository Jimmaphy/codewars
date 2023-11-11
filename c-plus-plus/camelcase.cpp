/* Complete the function so that it converts dashed delimited words in camel case.
 * Dashed being either underscored, dashed or combined.
 * The first word in the output should only be capitalized if it was so in the original string.
 */

#include <string>
#include <regex>

std::string to_camel_case(std::string text) {
  // Create the regular expression
  std::regex expression("(_|-)");
  
  // Look for the number of matches
  std::sregex_iterator iter(text.begin(), text.end(), expression);
  std::sregex_iterator end;
  int matchCount = std::distance(iter, end);
  
  // Create a string to store the result
  std::string result(text.size() - matchCount, ' ');
  int resultIndex = 0;
  
  // Loop through all the character
  for (int index; index < text.size(); index++) {
    // Convert the character to string
    std::string charString(1, text[index]);
    
    // Check whether the character is a delimiter
    if (std::regex_match(charString, expression)) {
      // Capitalize the next letter
      text[index + 1] = toupper(text[index + 1]);
    } else {
      // Add the character to the string
      result[resultIndex] = text[index];
      resultIndex = resultIndex + 1;  
    }
  }
 
  // Return the result
  return result;
}
