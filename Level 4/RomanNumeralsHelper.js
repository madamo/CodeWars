/*
    Description:

    Write two functions that convert a roman numeral to and from an integer value. Multiple roman numeral values will be tested for each function.

    Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals:

    1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC
    2008 is written as 2000=MM, 8=VIII; or MMVIII
    1666 uses each Roman symbol in descending order: MDCLXVI.
    Input range : 1 <= n < 4000

    In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

    Examples

    to roman:
    2000 -> "MM"
    1666 -> "MDCLXVI"
    86 -> "LXXXVI"
    1 -> "I"

    from roman:
    "MM"      -> 2000
    "MDCLXVI" -> 1666
    "LXXXVI"  ->   86
    "I"       ->    1
*/

/* Solution */

class RomanNumerals {
    static toRoman(num) {
      if (num >= 1000) {
        return "M" + this.toRoman(num - 1000)
      } else if (num >= 900) {
        return "CM" + this.toRoman(num - 900)
      } else if (num >= 500) {
        return "D" + this.toRoman(num - 500)
      } else if (num >= 400) {
        return "CD" + this.toRoman(num - 400)
      } else if (num >= 100) {
        return "C" + this.toRoman(num - 100)
      } else if (num >= 90) {
        return "XC" + this.toRoman(num - 90)
      } else if (num >= 50) {
        return "L" + this.toRoman(num-50)
      } else if (num >= 40) {
        return "XL" + this.toRoman(num - 40)
      } else if (num >= 10) {
        return "X" + this.toRoman(num - 10)
      } else if (num >= 9) {
        return "IX" + this.toRoman(num - 9)
      } else if (num >= 5) {
        return "V" + this.toRoman(num - 5)
      } else if (num >= 4) {
        return "IV" + this.toRoman(num - 4)
      } else if (num < 10 && num > 0) {
        return "I" + this.toRoman(num - 1)
      } else if (num <= 0) {
        return ""
      }
    }
  
    static fromRoman(str) {
      const thou = /(?<!C)M/g
      const nineHund = /CM/g
      const fiveHund = /(?<!C)D/g
      const fourHund = /CD/g
      const hund = /(?<!X)C(?!M|D)/g
      const ninety = /XC/g
      const fifty = /(?<!X)L/g
      const forty = /XL/g
      const ten = /(?<!I)X(?!L|C)/g
      const nine = /IX/g
      const five = /(?<!I)V/g // (?<!y)x
      const four = /IV/g
      const one = /I(?!V|X)/g
      
      let sum = 0
      if (str.match(thou)) {
          sum += str.match(thou).length * 1000
      }
      
      if (str.match(nineHund)) {
        sum += str.match(nineHund).length * 900
      }
      
      if (str.match(fiveHund)) {
        sum += str.match(fiveHund).length * 500
      }
      
      if (str.match(fourHund)) {
        sum += str.match(fourHund).length * 400
      }
      
      if (str.match(hund)) {
        sum += str.match(hund).length * 100
      }
      
      if (str.match(ninety)) {
        sum += str.match(ninety).length * 90
      }
      
      if (str.match(fifty)) {
        sum += str.match(fifty).length * 50
      }
      
      if (str.match(forty)) {
        sum += str.match(forty).length * 40
      }
      
      if (str.match(ten)) {
        sum += str.match(ten).length * 10
      }
      
      if (str.match(nine)) {
        sum += str.match(nine).length * 9
      }
      
      if (str.match(five)) {
        sum += str.match(five).length * 5
      }
      
      if (str.match(four)) {
        sum += str.match(four).length * 4
      }
      
      if (str.match(one)) {
        sum += str.match(one).length * 1
      }
      
      return sum
      
    }
  }
  