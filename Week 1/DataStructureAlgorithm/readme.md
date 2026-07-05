# Exercise 2: E-commerce Platform Search Function

This exercise demonstrates two ways to search a product list:

- `linearSearch` checks each product one by one.
- `binarySearch` looks up a product name faster, but only works correctly when the array is sorted by `productName`.

### Time complexity

- Linear search: best case `O(1)`, average and worst case `O(n)`.
- Binary search: best case `O(1)`, average and worst case `O(log n)`.

### How to run

From `DataStructureAlgorithm/exercise2`, run:

```powershell
java .\ECommerceSearch.java
```

If you want to compile first, use:

```powershell
javac ECommerceSearch.java
java ECommerceSearch
```

### Note

The sample product list is already sorted by `productName`, which is required for binary search.


# Exercise 7: Financial Forecasting

### What's Recursion?
A function that calls itself to solve smaller version of same problem.

it should contain a `base case` and `recursive case`.

~ to optimize more, we can use memoization - cache result to avoid recalculating.