# w0-leveret-lunch
A leveret is a young hare. Being precocial, rather than altricial, means they’re born hungry and quickly learn to find their own food.

Our hero, Baby Leveret, starts in the in the middle of a garden and eats carrots until she falls asleep.

The garden is a grid that is nrows tall and ncols wide. Each cell in the garden has a particular number of carrots in it.

Baby Leveret starts in the middle of the garden. If there are more than one cell in the middle, she starts in the middle cell with the most number of carrots. (There will never be a tie for the middle cell with the most number of carrots).

She eats all the carrots in that cell and then moves to the neighboring cell with the most number of carrots. She looks first to her west, then north, then east, then south. If there is a tie for the most number of carrots, she takes the first cell in the list that has the high number of carrots in it.

Once there are no neighboring cells with carrots, she falls asleep for a well-deserved nap.

For example, consider this garden:

     A   B   C   D   E   F   G
   +---------------------------+
1  | 2 | 3 | 1 | 4 | 2 | 2 | 3 |
   |---+---+---+---+---+---+---|
2  | 2 | 3 | 0 | 4 | 0 | 3 | 0 |
   |---+---+---+---+---+---+---|
3  | 1 | 7 | 0 | 2 | 1 | 2 | 3 |
   |---+---+---+---+---+---+---|
4  | 9 | 3 | 0 | 4 | 2 | 0 | 3 |
   +---------------------------+
There are two center cells, at D2 and D3. The cell at D2 has more carrots (4 versus 2), so Baby Leveret starts there and eats the 4 carrots at D2.
She then looks at the neighbors in WNES order and finds the highest carrot count is at D1. She eats the 4 carrots there.
Looking WNES, she finds there are more carrots at E1, and moves there and eats the 2 carrots there.
Looking WNES, she sees more carrots at F1, and moves there and eats the 2 carrots there.
Looking WNES, she sees 3 carrots both east and south — but since there’s a tie, she goes in WNES order, so heads east and eats the 3 carrots at G1.
Looking WNES, she finds only neighbors with 0 carrots, so she takes her post-lunch nap.
In total, she’s eaten 4 + 4 + 2 + 2 + 3 = 15 carrots.
Your Challenge»
IMPORTANT Practice good pair programming!
A big part of our course is pairing, and this is a great exercise to dive into planning with your pair — this problem has one or two places where it would be easy to write too much code, or to solve the same problem twice. Two heads will definitely be better than one here!

Write a function that accepts:

garden
A list of the garden cells with carrot counts. This will be a list of rows, with each row being a list of columns.
This function should return the number of carrots eaten.

For example, this starts in the middle, goes up, and then left:

garden = [
    [1, 1, 1],
    [0, 1, 1],
    [9, 1, 9]
]

lunch_count(garden) //  ==> 3
This starts at 4 (highest of the four middle), then goes right:

garden = [
    [9, 9, 9, 9],
    [9, 3, 1, 0],
    [9, 1, 4, 2],
    [9, 9, 1, 0],
]

lunch_count(garden) //  ==> 6
Here’s the example given in the previous section:

garden = [
    [2, 3, 1, 4, 2, 2, 3],
    [2, 3, 0, 4, 0, 3, 0],
    [1, 7, 0, 2, 1, 2, 3],
    [9, 3, 0, 4, 2, 0, 3],
]

lunch_count(garden) //  ==> 15
Implement the required functionality.

IMPORTANT Please stop for a code review
We’d love to see your completed code.

🐰 Congratulations!

Leveret Lunch: Solution
Implementation
© Copyright 2020, Rithm School. Last updated on Nov 04, 2020.
