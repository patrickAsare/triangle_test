# Shortest route in JavaScript

This test is all about finding the shortest route. Given we have triangle, find the shortest path expressed as a *sum* of the values from top to bottom. At each step you may move to *adjacent* numbers on the row below.

For example, given the following triangle as an array.

``` var triangle = [
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]```

The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Your code should work with the following test cases..

``` var triangle1 = [
     [1],
    [4,3],
   [8,2,6],
  [2,3,9,7]
]```

``` var triangle2 = [
     [3],
    [6,4],
   [3,4,7],
  [3,8,3,6]
]```

``` var triangle3 = [
     [2],
    [9,6],
   [4,5,8],
  [1,2,3,6]
]```


OK We have one solution in that works with the test cases..

but if your are feeling really clever, get it to work with this

```var triangle5 = [[2], [3,4], [6,5,7], [4,1,2,3], [4,2,8,1,2],[5,4,8,7,3,2]]```
