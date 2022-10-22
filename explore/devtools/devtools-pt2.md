# Debugging
1. The bug is that the inputs are strings and instead of adding the numbers together, the code concatenates the strings together. The output is "num1num2" instead of the number value of num1 + num2.
2. To fix the bug, I would add the numeric values of num1 and num2 together. I do this using the Number() function.
The solution for line 11 should be:
    `let result = Number(num1) + Number(num2)`
