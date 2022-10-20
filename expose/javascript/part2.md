# Part 2
1. The value '3' will be printed because 'i' is still accessible at line 12. Line 12 is still within the function scope.
2. The value '150' will be printed because 'dicountedPrice' is still accessible at line 13. Line 13 is still within the function scope.
3. The value '150' will be printed because 'finalPrice' is still accessible at line 14. Line 14 is still within the function scope.
4. The array '[50,100,150]' will be returned because 'discounted' is still accessible at line 16 when returning. Line 16 is still within the function scope. This array is the new discounted prices of the original prices in 'prices'.
5. The code will return an error because 'i' does not exist outside of the for loop block at line 12.
6. The code will return an error because 'discountedPrice' does not exist outside of the for loop block at line 13.
7. The value '150' will be printed because 'finalPrice' is still accessible at line 14. The scope of 'finalPrice' is the function block, and line 14 is within the function block.
8. The array '[50,100,150]' will be returned because 'discounted' is still accessible at line 16 when returning. The scope of 'dicounted' is the function block, and line 16 is within the function block.
9. The code will return an error because the code attempts to reassign 'discounted' at line 8, which is not allowed since 'discounted' was already assigned at line 3 as a const.
10. The code will return an error because the code attempts to reassign 'discounted' at line 8, which is not allowed since 'discounted' was already assigned at line 3 as a const.
11. The code will return an error because the code attempts to reassign 'discounted' at line 8, which is not allowed since 'discounted' was already assigned at line 3 as a const.

### Data Types
12. 
    a. student.name;
    
    b. student["Grad Year"];

    c. student.greeting();

    d. student["Favorite Teacher"]["name"];

    e. student["Courseload"][0];

### Arithmetic
13. 
    a. "32" is outputted because the integer 2 maps to "2", so "3"+"2"="32".

    b. '1' is outputted because "3" is converted to the integer '3' and then '2' is subtracted from it.

    c. '3' is outputted because null evaluates to '0', so '3 + 0 = 3'.

    d. "3null" is outputted because null is converted to "null", so "3" + "null" is concatenated as "3null".

    e. '4' is outputted because the integer value of 'true' is '1', so '1 + 3 = 4'.

    f. '0' is outputted because the integer values of false and null are both '0', so '0 + 0 = 0'.

    g. "3undefined" because undefined is converted to "undefined", so "3" + "undefined" is concatenated as "3undefined".
    
    h. 'NaN' is outputted. Since undefined has no integer value, an error occurs when trying to get the integer value of undefined. 'NaN' is outputted whenever there is an error.

### Comparison
14. 
    a. 'true' is outputted because "2" is converted to the integer '2', and '2' is greater than '1'.
    
    b. 'false' is outputted because the first character of "2" is greater than the first character of "12". 2 is greater than 1, so "2" > "12".
    
    c. 'true' is outputted because the integer value of "2" is '2', and '2' does equal '2'.
    
    d. 'false' is outputted because '2' and "2" are of different data types, so they don't equal each other.
    
    e. 'false' is outputted because "false" is converted to its number value of '0', and '0' does not equal '2'.
    
    f. 'true' is outputted because Boolean(2) returns 'true'. Since both operands are boolean data types, we then check if their values are the same, and they are the same, which is why we return 'true'.

15. The '==' operator converts the operands into numbers and checks to see whether the number values are equal or not. The '===' operator checks to see if two operands are equal without converting their datatypes. Therefore, if the two operands are of different data types, the output is automatically 'false'.