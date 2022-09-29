Question: You will be given two arrays of integers and asked to determine all integers between two sets that satisfy the following two conditions:
– The elements of the first array are all factors of the integer being considered
– The integer being considered is a factor of all elements of the second array

Input:
a = { 2, 6 }
b = { 24, 36 }

Output:
2

I really want to simplify this really confusing problem statement first.

The hardest part about this problem is to understand what is it actually saying. To put it in really simple words, you are provided with 2 arrays. Now you need to find a count of integers that satisfy the conditions:

The integers should be multiples of each element of first array.
The integers should be factors of each element of second array.
That is all you need to find out in the problem. Just return the count and your solution would have a successful submission.

example test case to find integers between two sets
Fig: Example test case
For the above example, you can find 2 such integers. 6 and 12. You can verify that by:

First condition (multiple of each element of array 'a')
2 _ 3 = 6
6 _ 1 = 6
2 _ 3 = 12
6 _ 2 = 12

Second condition (factor of each element of array 'b')
24 % 6 = 0
24 % 12 = 0
36 % 6 = 0
36 % 12 = 0
Code language: PHP (php)
So you could find 2 such integers between two sets, and hence that is the answer.
