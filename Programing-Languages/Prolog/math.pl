double_digit(X, Y) :-
  Y is X * 2.

is_even(X) :-
  Y is X//2, X =:= 2 * Y.