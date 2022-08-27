count_to_10(10) :- write(10), nl.

count_to_10(X) :-  
  write(X), nl,
  Y is X + 1,
  count_to_10(Y).

count_down(Low, High) :-
  between(Low, High, Y),
  Z is High - Y,
  write(Z), nl.

count_up(Low, High) :-
  between(Low, High, Y),
  Z is Y + Low,
  write(Z), nl.