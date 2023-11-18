/* When you buy something, you're asked for your credit card number,
 * phone number or the answer to your secret question.
 *
 * Since somebody can peek over your shoulder, the information is masked.
 * Write a function maskify which changes all but the last four characters into #.
 */

public class Maskify {
  public static String maskify(String str) {
    // Check whether the length is smaller than 4, return the string if true
    if (str == null || str.length() < 4) {
      return str;
    }

    // Create the masked string and return it
    String masked = new String(new char[str.length() - 4]).replace("\0", "#");
    return masked + str.substring(str.length() -4);
  }

  public static void main(String[] args) {
    System.out.println(maskify("4556364607935616"));
    // "############5616"

    System.out.println(maskify("64607935616"));
    // "#######5616"
    
    System.out.println(maskify("1"));
    // "1"
    
    System.out.println(maskify(""));
    // ""
    
    System.out.println(maskify("Skippy"));
    // "##ippy"
    
    System.out.println(maskify("Nananananananananananananananana Batman!"));
    // "####################################man!"
    
    System.out.println(maskify(null));
    // null
  }
}
