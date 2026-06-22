# Exercise 2: E-commerce Platform Search Function

### Big O notation?
It describes how fast an algo runs as the input size grows.
- it helps us compare algo and choose the efficient one.

Notation	Name	Example
O(1)	Constant time	Accessing array index
O(log n)	Logarithmic	Binary search
O(n)	Linear	Linear search
O(n²)	Quadratic	Bubble sort

### Algorithm analysis
Linear search in best case find in O(1), while avg and worst case in O(n).

while, Binary search in best case gives O(1), and O(log n) in avg and worst case.


~ we will use binary search with a sorted product list for fast search.


# Exercise 7: Financial Forecasting

### What's Recursion?
A function that calls itself to solve smaller version of same problem.

it should contain a `base case` and `recursive case`.

~ to optimize more, we can use memoization - cache result to avoid recalculating.